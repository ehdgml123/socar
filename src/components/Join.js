import Header from "./Header";
import "../css/Join.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    confirm: "",
  });

  const [emailError, setEmailError] = useState("");
  const [emailCheckLoading, setEmailCheckLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordValid, setPasswordValid] = useState(null);
  const [isCheckingPassword, setIsCheckingPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 이메일 입력 중이면 에러 초기화
    if (name === "email" && value === "") {
      setEmailError("");
    }

    // 비밀번호 확인 시만 검증
    if (name === "confirm") {
      const password = form.password;
      const confirm = value;

      if (confirm === "") {
        setPasswordError("");
        setPasswordValid(null);
        return;
      }

      setIsCheckingPassword(true);
      setPasswordError("비밀번호 일치 여부 확인 중...");

      setTimeout(() => {
        if (password !== confirm) {
          setPasswordError("비밀번호가 일치하지 않습니다.");
          setPasswordValid(false);
        } else {
          setPasswordError("비밀번호가 일치합니다.");
          setPasswordValid(true);
        }
        setIsCheckingPassword(false);
      }, 300);
    }
  };

  const handleEmailBlur = async () => {
    if (!form.email) return;

    setEmailCheckLoading(true);
    const isDuplicate = await checkEmailExists(form.email);
    setEmailError(isDuplicate ? "이미 사용 중인 이메일입니다." : "");
    setEmailCheckLoading(false);
  };

  const checkEmailExists = async (email) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/auth/check-email?email=${email}`
      );
      const data = await res.json();
      return data.exists;
    } catch (err) {
      console.error("이메일 확인 오류:", err);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.name ||!form.password || !form.confirm) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      alert("유효한 이메일 형식이 아닙니다.");
      return;
    }

    if (form.password !== form.confirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: form.email,
            username: form.name,
            password: form.password,
          }),
        }
      );

      if (res.ok) {
        alert("회원가입 성공!");
        navigate("/SubMainpage");
      } else {
        const data = await res.json();
        alert(data.message || "회원가입 실패");
      }
    } catch (error) {
      console.error("가입 에러:", error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <Header />
      <div className="Joinwrap">
        <div className="Joinboxs">
          <div className="Joinforms">
            <div className="headertextbox">
              <div className="container">
                <div className="member-container">
                  <div className="header">
                    <div>회원 가입을 위해</div>
                    <div>정보를 입력해주세요</div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="user-info">
                      <div className="input-wrap">
                        <input
                          type="email"
                          name="email"
                          placeholder="이메일"
                          className="user-input"
                          value={form.email}
                          onChange={handleChange}
                          onBlur={handleEmailBlur}
                        />
                        {emailCheckLoading && (
                          <div className="error-text checking-text">
                            이메일 확인 중...
                          </div>
                        )}
                        {emailError && (
                          <div className="error-text">{emailError}</div>
                        )}
                      </div>
                      <div className="input-wrap">
                      <input
                        type="text"
                        name="name"
                        placeholder="이름"
                        className="user-input"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                      <div className="input-wrap">
                        <input
                          type="password"
                          name="password"
                          placeholder="비밀번호"
                          className="user-input"
                          value={form.password}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-wrap">
                        <input
                          type="password"
                          name="confirm"
                          placeholder="비밀번호 확인"
                          className="user-input"
                          value={form.confirm}
                          onChange={handleChange}
                        />
                        {passwordError && (
                          <div
                            className={`error-text ${
                              passwordError ===
                              "비밀번호 일치 여부 확인 중..."
                                ? "checking-text"
                                : passwordValid
                                ? "success-text"
                                : ""
                            }`}
                          >
                            {passwordError}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="btn">
                      <button type="submit">가입하기</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;
