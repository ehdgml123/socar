import { Link, useNavigate } from "react-router-dom";
import "../css/inquiry.css";
import Header from "./Header";
import { useEffect, useState } from "react";

const Inquiry = () => {

  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false)
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setIsLogin(!!token);


    const fetchInquiries = async () => {
      try{
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/inquirycreate/list`);
        const data = await res.json();
        setInquiries(data);
        setInquiries(data);
      }catch(err){
        console.log("문의 에러:",err)
      }
    };

     fetchInquiries();
  },[])

  const handleWriteClick = () => {
    if(!isLogin){
      alert("로그인이 필요합니다.");
      navigate("/login");
    }else{
      navigate("/inquiryCreate");
    }
  }

  const formData = (isoDate) => {

    const date = new Date(isoDate);
    const year = String(date.getFullYear()).slice(-2);
    const month = String(date.getMonth() +1).padStart(2,"0");
    const day = String(date.getDate()).padStart(2,"0");
    return `${year}-${month}-${day}`
  }


  return (
    <>
      <Header />
      <div className="inquirywrap">
        <div className="maintextbox">
          <h1 className="maintext">문의 게시판</h1>
        </div>
        <div className="inquirybox">
          <table>
            <thead>
              <tr>
                <th style={{ width: "124px" }}>번호</th>
                <th style={{ width: "52%" }}>제목</th>
                <th style={{ width: "283px" }}>글쓴이</th>
                <th>작성시간</th>
              </tr>
            </thead>
            <tbody>
                {inquiries.map((item, idx) => (
                  <tr key={item.id}>
                     <td>{item.id}</td>
                     <td>
                      <Link to={`/inquiry/${item.id}`} className="inqhover">
                      {item.title}
                      </Link>
                      </td>
                     <td>{item.user?.email || "알수없음"}</td>
                     <td>{formData(item.created_at)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <button onClick={handleWriteClick} className="Picton_2">
            문의 하기
          </button>
        </div>
      </div>
    </>
  );
};

export default Inquiry;
