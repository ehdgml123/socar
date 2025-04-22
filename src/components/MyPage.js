import { Carousel } from "react-bootstrap";
import "../css/mypage.css";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slide from '../image/mo_main_event_04.png'
import slide1 from '../image/388_image_1.png'
import slide2 from '../image/44748_37339_215.jpg'

const MyPage = () => {
  const [user, setUser] = useState(null);

  const [historyCount, setHistoryCount] = useState(0);

  const [historyData, setHistoryData] = useState([]);

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/api/auth/me`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("사용자 정보를 가져오는 데 실패");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("사용자 데이터를 가져오기 오류", error);
      }
    };

    const fetchHistory = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/api/upload/history`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("차량 파손 내역을 가져오는 데 실패");
        }

        const data = await response.json();
        setHistoryCount(data.data.length);
        setHistoryData(data.data);
      } catch (error) {
        console.log("차량 파손 가져오기 오류", error);
      }
    };

    if (token) {
      fetchUserData();
      fetchHistory();
    } else {
      console.error("로그인된 사용자 정보가 없습");
    }
  }, [token]);

  const recechHistory = historyData.slice(0, 3); //  최신 3개 내역만 나오게 한다.

  return (
    <>
      <Header />
      <div className="mypagewrap">
        <div className="yourboxs">
          {user && (
            <p className="yourboxstext">
              {user.username}님의 차량파손 조회 내역 {historyCount}건 입니다.
            </p>
          )}
        </div>
        <div className="mypagesubbox">
          <div className="Recenthistorybox">
            <p className="Recenthistorytext"> 최근 조회내역</p>
            <div className="Recenthistorytable">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">번호</th>
                    <th scope="col">내역</th>
                    <th scope="col">조회시간</th>
                  </tr>
                </thead>
                <tbody>
                  {recechHistory.length > 0 ? (
                    recechHistory.map((history, index) => (
                      <tr key={history.detection_set_id}>
                        <th scope="row">{index + 1}</th>
                        <td>{history.detection_set_id}</td>
                        <td>{history.detected_at}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3">내역이 없습니다.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <p className="Recenthistorybottext">
              <Link to="/viewhistory" className="Linkbtn">전체 내역 보러가기</Link>
            </p>
          </div>
          <div className="advertisementybox">
            <Carousel>
              <Carousel.Item interval={10000}>
                <img className="d-block w-100" src={slide} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={slide1} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide2} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
