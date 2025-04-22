import {  useState } from "react";
import "../css/InquiryCreate.css";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";

const InquiryCreate = () => {

    const navigate = useNavigate();
   
  const [formData, setFormData] = useState({
     title : "",
     phone : "",
     wr_content : "",
  });

  const formatPhoneNumber = (value) => {

    const numbers = value.replace(/\D/g, "");

    if(numbers.length <= 3) return numbers;
    if(numbers.length <=7 ) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    if(numbers.length <=11 ) return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;

     return `${numbers.slice(0,3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`
  };



  const handleChange = (e) => {

    const {name, value} = e.target;

    const formattedValue  = 
      name === "phone" ? formatPhoneNumber(value) : value;

    setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
    }));
  } ;

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { title, phone, wr_content } = formData;

   const token = sessionStorage.getItem('token');

    if (!title || !phone || !wr_content) {
      alert("모든 항목을 입력해주세요");
      return;
    }
  
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/inquirycreate/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ title, phone, wr_content }),
      });
  
      if (!response.ok) {
        const err = await response.json();
        alert(err.message || "등록 실패");
        return;
      }
  
      console.log("제출된 폼:", formData);
      alert("문의가 등록되었습니다.");
      navigate("/Inquiry");
    } catch (error) {
      console.error("문의 등록 에러:", error);
      alert("서버 오류가 발생했습니다.");
    }
  };
  



  return (
    <>
      <Header />
      <div className="inquiryCreatewrap">
        <div className="inquiryCreatBoxs">
            <h1 className="inquiryCreattext">문의하기</h1>
          <form className="form_area" onSubmit={handleSubmit}>
            <ul>
              <li>
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  className="sh_input"
                  maxLength="50"
                  value={formData.title}
                  onChange={handleChange}
                />
                <label htmlFor="wr_name">제목</label>
              </li>

              <li>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  required
                  className="sh_input"
                  maxLength="13"
                  pattern="\d{3}-\d{3,4}-\d{4}"
                  title="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <label htmlFor="phone">연락처</label>
              </li>

              <li>
                <textarea
                  name="wr_content"
                  id="wr_content"
                  className="sh_input"
                  value={formData.wr_content}
                  onChange={handleChange}
                />
                <label htmlFor="wr_content">문의내용</label>
              </li>
            </ul>

            <button className="send">문의 신청하기</button>
          </form>
          <div className="inquiryCreButtonBoxs">
          <Link to="/Inquiry" className="Picton_2-A">
            문의 게시판
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default InquiryCreate;
