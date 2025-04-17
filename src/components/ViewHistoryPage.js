import { useEffect, useState } from "react";
import "../css/viewhistorypage.css";
import Header from "./Header";
import ViewHistoryModel from "./ViewHistoryModel";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination } from "react-bootstrap"; 

const ViewHistoryPage = () => {
  const [history, setHistory] = useState([]);

  // 모달열기 상태
  const [modalOpen, setModalOpen] = useState(false);

  // 선택된 이미지
  const [selectedImages, setSelectedImages] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 5;  // 페이지당 항목 수

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/api/upload/history`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const result = await response.json();
        if (result.status === "success") {
          setHistory(result.data);
        } else {
          alert("내역 불러오기 실패");
        }
      } catch (error) {
        console.error("조회 오류:", error);
        alert("오류가 발생했습니다.");
      }
    };

    fetchHistory();
  }, []);
  
  const openModel = async (detectionSetId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/upload/history/${detectionSetId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();
      if (result.status === "success") {
        // 선택된 이미지를 설정
        setSelectedImages(result.data);
        // 모달 열기
        setModalOpen(true);
      } else {
        alert("이미지 불러오기 실패");
      }
    } catch (error) {
      console.log("이미지 조회 오류:", error);
      alert("오류 발생");
    }
  };

  const closeModal = () => {
    setModalOpen(false); // 모달 닫기
    setSelectedImages([]); // 선택된 이미지 초기화
  };

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = history.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(history.length / itemPerPage);

  const handlePageChange = (pageNumber) => {
     setCurrentPage(pageNumber);
  }

  return (
    <>
      <Header />
      <div className="ViewHistorywrap">
        <div className="Viewmaintextbox">
          <h1 className="Viewmaintext">파손 조회내역</h1>
        </div>
        <div className="ViewHistorybox">
          <table>
            <thead>
              <tr>
                <th style={{ width: "113px" }}>번호</th>
                <th style={{ width: "47%" }}>내역</th>
                <th style={{ width: "109px" }}>조회시간</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr
                  key={index}
                  onClick={() => openModel(item.detection_set_id)}
                >
                  <td>{index + 1}</td>
                  <td className="tdhover">{item.detection_set_id}</td>
                  <td>{item.detected_at}</td>
                </tr>
              ))}
              {history.length === 0 && (
                <tr>
                  <td colSpan="3">조회내역 없습니다</td>
                </tr>
              )}
            </tbody>
          </table>
          {totalPages > 1 && (
            <Pagination>
                {Array.from({ length: totalPages}, (_, i) => (
                   <Pagination.Item
                   key={i + 1}
                   active={currentPage === i +1}
                   onClick={() => handlePageChange(i + 1)}
                   >
                     {i + 1}
                   </Pagination.Item>
                ))}
            </Pagination>
          )}
        </div>
      </div>
      <ViewHistoryModel
        isOnen={modalOpen}
        onClose={closeModal}
        images={selectedImages}
      />
    </>
  );
};

export default ViewHistoryPage;
