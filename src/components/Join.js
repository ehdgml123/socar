import Header from "./Header";
import "../css/Join.css";
import { useState } from "react";



const Join = () => {

    const [form, setForm] = useState({
        email: "",
        name: "",
        password: "",
        confirm: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

      /*
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (!form.email || !form.name || !form.password || !form.confirm) {
          alert("모든 필드를 입력해주세요.");
          return;
        }
      
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
          alert("유효한 이메일 형식이 아닙니다.");
          return;
        }
      
        const isDuplicate = await checkEmailExists(form.email);
        if (isDuplicate) {
          alert("이미 사용 중인 이메일입니다.");
          return;
        }
      
        if (form.password !== form.confirm) {
          alert("비밀번호가 일치하지 않습니다.");
          return;
        }
      
        console.log("제출 완료:", form);
      };
*/
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

                  <form>
                    <div className="user-info">
                      <div id="email">
                        <input
                          type="email"
                          name="email"
                          placeholder="이메일"
                          className="user-input"
                          value={form.email}
                          onChange={handleChange}
                        />
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
