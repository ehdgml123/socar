import Header from "./Header";
import "../css/Join.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Join = () => {

    const [form, setForm] = useState({
        email: "",
        name: "",
        password: "",   // 비밀번호 입력
        confirm: "",    // 비밀번호 확인
      });
    
      const [emailError, setEmailError] = useState("");
      const [emailCheckLoading, setEmailCheckLoading] = useState(false);

      const navigate = useNavigate();

      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

      // 이메일 중복검사
      const handleEmailBlur = async () => {
        if (!form.email) return;
    
        setEmailCheckLoading(true);
        const isDuplicate = await checkEmailExists(form.email);
        setEmailError(isDuplicate ? "이미 사용 중인 이메일입니다." : "");
        setEmailCheckLoading(false);
      };

      // 서버에서 이메일 중복 확인 
      const checkEmailExists = async(email) => {
         
        try{
          const res = await(`/api/check-email?email=${email}`);
          const data = await res.json();
          return data.exists;
        }catch(err){
          console.error("이메일 확인 오류:" , err)
          return false;
        }
      }


      
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // 필드 검사
        if (!form.email || !form.name || !form.password || !form.confirm) {
          alert("모든 필드를 입력해주세요.");
          return;
        }
    
        // 이메일 형식 확인
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
          alert("유효한 이메일 형식이 아닙니다.");
          return;
        }
    
        // 비밀번호 확인
        if (form.password !== form.confirm) {
          alert("비밀번호가 일치하지 않습니다.");
          return;
        }
    
      
        try {
          const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: form.email,
              name: form.name,
              password: form.password,
            }),
          });
    
          if (res.ok) {
            alert("회원가입 성공!");
            navigate("SubMainpage"); 
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
                      <div id="email">
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
                          <div className="error-text">✔ 이메일 확인 중...</div>
                        )}
                        {emailError && (
                          <div className="error-text">{emailError}</div>
                        )}
                      </div>
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="이름"
                          className="user-input"
                          value={form.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          name="password"
                          placeholder="비밀번호"
                          className="user-input"
                          value={form.password}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          name="confirm"
                          placeholder="비밀번호 확인"
                          className="user-input"
                          value={form.confirm}
                          onChange={handleChange}
                        />
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
