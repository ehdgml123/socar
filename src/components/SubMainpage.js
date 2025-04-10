import { Link } from 'react-router-dom';
import '../css/SubMainpage.css'
import Header from './Header';
import Footer from './Footer';


const SubMainpage = () => {
    return(
        <>
        <Header />
        <div className='SubMainwarp'>
            <div className='boxss'>
            <Link to="/carcheck" className="CarcheckLink">  
                 <li className='Carcheck'>
                    <span className="material-symbols-outlined" style={{fontSize:'125px'}}>no_crash</span>
                    <p className='Carchecktext'>확인하기</p>
                  </li>
            </Link>      
            <Link to="">
                 <li className='test'>
                   <span className="material-symbols-outlined" style={{fontSize:'125px'}}>event_note</span>
                   <p className='Carchecktext'>확인하기</p>
                </li>         
            </Link>   
   
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default SubMainpage;