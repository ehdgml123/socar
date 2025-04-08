import Header from "./Header";
import "../css/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

   const [form, setForm] = useState({
      username: "",
      password: ""
   });


   const navigate = useNavigate();

   const handleChange = (e) => {
       
      const {name, value} = e.target;
      setForm((prev) => ({
         ...prev,
         [name]: value,
      }));
   }

   const handleLogin = async (e) => {

    e.preventDefault();

    if (!form.username || !form.password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    try{
      const res = await fetch("/api/login",{
         method: "POST",
         headers:{
          "Content-Type": "application/json",
         },
         body : JSON.stringify(form),
      });

      if(res.ok){
        alert("로그인 성공!");
        navigate("/SubMainpage");
      }else{
        const data = await res.json();
        alert(data.message || "로그인 실패");
      }
    }catch(err){
       console.error("로그인 오류:", err)
       alert("오류 발생")
    }
   }


  return (
    <>
      <Header />
      <div className="Loginwrap">
        <div className="Loginboxs">
          <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="user-box">
                <input type="text" name="username" required value={form.username} onChange={handleChange} />
                <label>Username</label>
              </div>
              <div className="user-box">
                <input type="password" name="password" required value={form.password} onChange={handleChange} />
                <label>Password</label>
              </div>
              <button type="submit" className="login-btn">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
