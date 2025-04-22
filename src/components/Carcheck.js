import "../css/carcheck.css";
import Header from "./Header";
import { useState } from "react";
import Imgmodel from "./Imgmodel";
import Videomodel from "./Videomodel";
import LoadingModal from "./LoadingModal";

const Carcheck = () => {
  const [showModal, setShowModal] = useState(false);

  const [showVidModal, setShowVidModal] = useState(false);

  const [uploadedVideo, setUploadedVideo] = useState(null);

  // 손상탐지 결과 이미지
  const [detectionResults, setDetectionResults] = useState([]);

  // 스피너
  const [loading, setLoading] = useState(false);

  const [uploadedImages, setUploadedImages] = useState({
    front: null,
    side: null,
    siderig: null,
    back: null,
  });

  // 파손 명칭 한글 변환 
  const damageLabelMap = {
   Scratched: "긁힘",
   Breakage: "파손",
   Separated: "이탈",
   Crushed: "찌그러짐",
 };

  const handleDetectionResults = (resultData) => {
    // output_image 경로 배열로 상태 업데이트
    setDetectionResults(resultData);

    setShowModal(false);
  };

  return (
    <>
      <Header />
      <div className="carcheckwrap">
        <div className="carcheckboxs">
          <div className="fileboxs">
            <div className="fileimg">
              <div className="button3" onClick={() => setShowModal(true)}>
                <span className="material-symbols-outlined">image</span>
                이미지 업로드
              </div>
            </div>
            
            {/* <div className="filevid">
              <div className="button5" onClick={() => setShowVidModal(true)}>
                <span className="material-symbols-outlined">smart_display</span>
                영상 업로드
              </div>
            </div> */}
          </div>
        </div>
        <div className="resultboxs">
          <div className="resultbox">
            <div className="resultboxMaintext">
              <p className="resultMaintext">차량 파손 확인하기</p>
            </div>
            <div className="breakresultbox">
              <div className="breakresult">
                {loading && (
                    <LoadingModal/>
                )}
                {detectionResults.map((item, index) => (
                  <div key={index} className="detection-item">
                    {item.output_image ? (
                      <>
                        <img
                          src={`${
                            process.env.REACT_APP_SERVER_URL
                          }/${item.output_image.replace(/\\/g, "/")}`}
                          alt={`탐지결과 ${index + 1}`}
                          className="uploaded-image"
                        />
                        <div className="damage-label">
                          {Array.isArray(item.predictions?.predictions) &&
                          item.predictions.predictions.length > 0 ? (
                            item.predictions.predictions.map((pred, i) => (
                              <p key={i}>{damageLabelMap[pred.class] || pred.class}</p>
                            ))
                          ) : (
                            <p>파손 없음</p>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <p>이미지가 없습니다.</p>
                        <p>파손 없음</p>
                      </>
                    )}
                  </div>
                ))}

                {/*비디오 출력*/}
                {uploadedVideo && (
                  <video
                    src={uploadedVideo}
                    controls
                    className="uploaded-video"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Imgmodel
          onClose={() => setShowModal(false)}
          setUploadedImages={setUploadedImages}
          onDetectionComplete={handleDetectionResults}
          setLoading={setLoading}
        />
      )}

      {showVidModal && (
        <Videomodel
          onClose={() => setShowVidModal(false)}
          setUploadedVideo={setUploadedVideo}
        />
      )}
    </>
  );
};

export default Carcheck;
