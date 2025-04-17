import { Link, useNavigate } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/auth/logout`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.ok) {
        // 로컬 스토리지에서 토큰 삭제
        localStorage.removeItem("token");
        alert("로그아웃 성공!");
        navigate("/login");
      } else {
        const data = await res.json();
        alert(data.detail || "로그아웃 실패");
      }
    } catch (err) {
      console.error("로그아웃 오류:", err);
      alert("오류 발생");
    }
  };

  return (
    <>
      <div className="Navwrap">
        <nav className="navbar">
          <div className="navbar__logo">
            <Link to="/SubMainpage">차량 시스템 체계</Link>
          </div>

          <ul className="navbar__menu">
            {!localStorage.getItem("token") ? (
              <>
                <li>
                  <Link to="/Login">로그인</Link>
                </li>
                <li>
                  <Link to="/Join">회원가입</Link>
                </li>
              </>
            ) : (
              <li style={{ cursor: "pointer" }} onClick={handleLogout}>
                로그아웃
              </li>
            )}
            <li>
              <Link to="/Inquiry">문의하기</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
