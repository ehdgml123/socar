
import '../css/imgmodel.css'
import carFront from '../image/car.png';
import carSide from '../image/sidecar.png'
import carSiderig from '../image/sidecarrig.png'
import close from '../image/cancel.png'
import { useRef, useState } from 'react';

const Imgmodel = ({onClose, setUploadedImages}) => {

    const sideRef = useRef(null);   // 좌
    const sideRigRef = useRef(null);  // 우
    const backRef = useRef(null);     // 뒤

    const [localImages, setLocalImages] = useState({
      front: null,
      side: null,
      siderig: null,
      back: null
    });

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      const type = e.target.dataset.type;
    
      if (file) {
        console.log("업로드 된 이미지:", file);
        const reader = new FileReader();
        reader.onloadend = () => {
          // Imgmodel 내부 상태에 저장
          setLocalImages((prev) => ({
            ...prev,
            [type]: reader.result,
          }));
    
          // 스크롤 이동
          if (type === 'front' && sideRef.current) {
            sideRef.current.scrollIntoView({ behavior: 'smooth' });
          } else if (type === 'carside' && sideRigRef.current) {
            sideRigRef.current.scrollIntoView({ behavior: 'smooth' });
          } else if (type === 'carsiderig' && backRef.current) {
            backRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        };
        reader.readAsDataURL(file);
      }
    };

    const handleApply = () => {
      setUploadedImages(localImages); // 부모에게 전달
      onClose();                      // 모달 닫기
    };

    return(
        <>
        <div className="modal-overlay">
             <div className="modal-box">
                <div  className='modelclosebox'>
                <img src={close} alt="닫기버튼" className="modelClose" onClick={onClose}/>
                </div>
                <div className='Modelmaintextbox'>
                   <p className='Modelmaintext'>외관 차량 이미지</p>
                </div>
                 <div className='frontfile'>
                    <div className='fronttextbox'>
                        <p className='fronttext'>전면</p>
                     </div>
                     <div className="frontuploadbox">
                        <img src={carFront} alt="차량 정면" className="car-image" />
                        <input type='file' 
                          accept='image/*' 
                          id='car-upload'
                          data-type="front" 
                          onChange={handleFileChange} 
                          style={{display : "none"}} 
                          />
                        <label htmlFor="car-upload" className="upload-icon">
                              <span className="material-symbols-outlined">add_circle</span>
                        </label>
                     </div> 
                 </div>
                 <div className='sidefile' ref={sideRef}>
                     <div className='fronttextbox'>
                          <p className='fronttext'>옆면(좌)</p>
                     </div>
                      <div className='sideuploadbox'>
                          <img src={carSide} alt="차량 옆(좌)" className="carside-image" />
                           <input 
                              type='file' 
                               accept='image/*' 
                               id='car-upload-side' 
                               data-type="carside" 
                               onChange={handleFileChange} 
                               style={{display : "none"}} 
                            />
                            <label htmlFor="car-upload-side" className="upload-icon">
                                <span className="material-symbols-outlined">add_circle</span>
                            </label>
                      </div>
                 </div>
                 <div className='siderigfile' ref={sideRigRef}>
                     <div className='fronttextbox'>
                          <p className='fronttext'>옆면(우)</p>
                     </div>
                      <div className='sideuploadbox'>
                          <img src={carSiderig} alt="차량 옆(좌)" className="carsiderig-image" />
                           <input 
                              type='file' 
                               accept='image/*' 
                               id='car-upload-siderig' 
                               data-type="carsiderig" 
                               onChange={handleFileChange} 
                               style={{display : "none"}} 
                            />
                            <label htmlFor="car-upload-siderig" className="upload-icon">
                                <span className="material-symbols-outlined">add_circle</span>
                            </label>
                      </div>
                 </div>
                 <div className='carbackfile' ref={backRef}>
                     <div className='fronttextbox'>
                          <p className='fronttext'>뒷면</p>
                     </div>
                      <div className='carbackuploadbox'>
                          <img src={carFront} alt="차량 옆(좌)" className="carback-image" />
                           <input 
                              type='file' 
                               accept='image/*' 
                               id='car-upload-carback' 
                               data-type="carback" 
                               onChange={handleFileChange} 
                               style={{display : "none"}} 
                            />
                            <label htmlFor="car-upload-carback" className="upload-icon">
                                <span className="material-symbols-outlined">add_circle</span>
                            </label>
                      </div>
                 </div>
                 

               <button className='complete-button' onClick={handleApply}>적용하기</button>
              </div>
        </div>
        </>
    )
}

export default Imgmodel;