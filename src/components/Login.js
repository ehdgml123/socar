import Header from "./Header";
import "../css/Login.css";

const Login = () => {
  return (
    <>
      <Header />
      <div className="Loginwrap">
        <div className="Loginboxs">
          <div className="login-box">
            <h2>Login</h2>
            <form>
              <div className="user-box">
                <input type="text" name="username" required />
                <label>Username</label>
              </div>
              <div className="user-box">
                <input type="password" name="password" required />
                <label>Password</label>
              </div>
              <a href="#">Login</a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
