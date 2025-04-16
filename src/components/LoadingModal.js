import '../css/loadingModel.css'

const LoadingModal = () => {
  return (
    <>
      <div className="loading-modal-overlay">
        <div className="loading-modal-content">
          <div
            className="spinner-border text-light"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          />
          <p className="loading-text">로딩 중입니다...</p>
        </div>
      </div>
    </>
  );
};

export default LoadingModal;
