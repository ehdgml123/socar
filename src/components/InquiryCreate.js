import { useState } from "react";
import "../css/InquiryCreate.css";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";

const InquiryCreate = () => {

    const navigate = useNavigate();
    
  const [formData, setFormData] = useState({
     email : "",
     sh_phone : "",
     wr_content : "",
  });

  const handleChange = (e) => {

    const {name, value} = e.target;

    setFormData((prev) => ({
        ...prev,
        [name]: value,
    }));
  } ;

  const handleSubmit = (e) => {

    e.preventDefault();

    if(!formData.email || !formData.sh_phone || !formData.wr_content){
        alert("모든 항목을 입력해주세요");
        return;
    }

    console.log("제출된 폼 :", formData);
    alert("문의가 등록되었습니다.")
    navigate("/Inquiry")

  }



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
                  name="email"
                  id="email"
                  required
                  className="sh_input"
                  maxLength="20"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="wr_name">이메일</label>
              </li>

              <li>
                <input
                  type="text"
                  name="sh_phone"
                  id="sh_phone"
                  required
                  className="sh_input"
                  maxLength="12"
                  pattern="\d*"
                  title="phone"
                  value={formData.sh_phone}
                  onChange={handleChange}
                />
                <label htmlFor="sh_phone">연락처</label>
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

            <button className="send">상담 신청하기</button>
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
