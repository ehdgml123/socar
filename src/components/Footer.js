
import { Link } from 'react-router-dom';
import '../css/Footer.css'

const Footer = () => {

return(
    <>
     <div className='footerwrap'>
        <div className='footertext'>
           <li>@ 차량 체계</li>
           <li>2조 : 내호승 , 이동희</li>
           <li ><Link to="">관리자 페이지</Link></li>
        </div>
     </div>
    </>
);

}

export default Footer;