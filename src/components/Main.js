import { Link } from "react-router-dom";
import "../css/Main.css"

const Main = () => {

 return(
    <>
     <div className="Mainwrap">
        <div className="Maintextbox">
            <p className="toptext">
                차량 시스템 체계
            </p>
        </div>
        <div className="Mainbuttonbox">
        <Link className="custom btn-1" to="/SubMainpage">이동</Link>
        </div>
        <div className="Mainfooter">
            <p className="text-A">2조 : 내호승, 이동희</p>
        </div>
     </div>
    </>
 )

}

export default Main;