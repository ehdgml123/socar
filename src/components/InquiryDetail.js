import { Link, useNavigate, useParams } from "react-router-dom";
import "../css/InquiryDetail.css";
import Header from "./Header";
import { useEffect, useState } from "react";

const InquiryDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [inquiry, setInquiry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/api/inquiry/${id}`
        );
        const data = await res.json();
        setInquiry(data);
      } catch (err) {
        console.error("문의 상세 에러:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

   // 게시물 삭제 
   const handleDelete = async () => {
      
   const confirmed = window.confirm("삭제하시겠습니까?");
   if(!confirmed) return;

   try{
    const token = sessionStorage.getItem("token");
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/inquiry/${id}`,
     {
        method : "DELETE",
        headers : {
            Authorization: `Bearer ${token}`,
        },
     }
    );

    if(res.status === 204){
        alert("삭제되었습니다.");
        navigate("/Inquiry");
    }else{
        const data = await res.json();
        alert (data.detail || "삭제에 실패했습니다");
    }
   }catch(err){
    console.error("삭제 요청 오류:",err);
    alert("서버 오류가 발생")
   }
};

  if (loading) return <div>로딩 중...</div>;
  if (!inquiry) return <div>문의 정보를 불러올 수 없습니다.</div>;

  return (
    <>
      <Header />
      <div className="inquiryDetailwrap">
        <div className="inquiryDetailBoxs">
          <h1 className="inquiryDetailtext">문의 상세페이지</h1>
          <ul className="form_area">
            <li>
              <input
                type="text"
                name="title"
                id="title"
                className="sh_input"
                value={inquiry.title}
                readOnly
              />
              <label htmlFor="wr_name">제목</label>
            </li>
            <li>
              <input
                type="text"
                className="sh_input"
                value={inquiry.phone}
                readOnly
              />
              <label>연락처</label>
            </li>
            <li>
              <textarea
                className="sh_input"
                value={inquiry.wr_content}
                readOnly
                style={{height: '82px'}}
              />
              <label>문의내용</label>
            </li>
          </ul>
        </div>
        <div className="inquiryDetailButtonBoxs">
          <Link to="/Inquiry" className="Picton_2-B">
            문의 게시판
          </Link>
          <button onClick={handleDelete} id="Flamingo_2">삭제하기</button>
        </div>
      </div>
    </>
  );
};

export default InquiryDetail;
