import React from "react";
import close from "../image/cancel.png";
import "../css/ViewHistoryModel.css"; // 스타일을 별도로 정의

const ViewHistoryModel = ({ isOnen, onClose, images }) => {
  if (!isOnen) return null; // 모달이 열려있지 않으면 렌더링 하지 않음

  return (
    <>
      <div className="hisorymodel-overlay" onClick={onClose}>
        <div
          className="hisorymodel-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modelclosebox">
            <img
              src={close}
              alt="닫기버튼"
              className="hisorymodelmodelClose"
              onClick={onClose}
            />
          </div>
          <div className="hisoryModelmaintextbox">
            <p className="hisoryModelmaintext">내역 사진</p>
          </div>
          <div className="model-image">
            {images.length === 0 ? (
              <p>이미지가 없습니다.</p>
            ) : (
              images.map((image, index) => (
                <div key={index} className="modal-image-item">
                  <img
                    src={`${process.env.REACT_APP_SERVER_URL}/${image.image_path}`}
                    alt={`이미지 ${index + 1}`}
                    className="modal-image"
                  />
                  <p>{image.position}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewHistoryModel;
