import { Link } from 'react-router-dom';
import '../css/Header.css'


const Header = () => {
    
    return(
        <>
        <div className='Navwrap'>
           <nav className='navbar'>
           <div class="navbar__logo">
            <Link to="/SubMainpage">차량 시스템 체계</Link>
        </div>

        <ul class="navbar__menu">
            <li><Link to="/Login">로그인</Link></li>
            <li><Link to="/Join">회원가입</Link></li>
            <li><Link to="/Inquiry">문의하기</Link></li>
            <li><Link to="">고객센터</Link></li>
        </ul>
           </nav>
        </div>
        </>
    )
}

export default Header;