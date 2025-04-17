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

        <Link className="custom btn-1" to="/SubMainpage">페이지 이동</Link>
     </div>
    </>
 )

}

export default Main;