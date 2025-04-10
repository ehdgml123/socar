import { useState } from 'react'
import '../css/video.css'
import close from '../image/cancel.png'
import video from '../image/youtube.png'

const Videomodel = ({onClose, setUploadedVideo}) => {

    const [localVideo, setLocalVideo] = useState(null); 


    const handleFileChange = (e) => {

        const file = e.target.files[0];
        if(file){
            console.log("업로드 영상 파일:", file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setLocalVideo(reader.result);
            }
            reader.readAsDataURL(file)
        
        }
    }

    const handleApply = () => {

        if(localVideo){
            setUploadedVideo(localVideo);
            onClose();
        }else{
            alert("영상을 먼저 업로드 해주세요");
        }
    }

  return(
    <>
     <div className="vidmodal-overlay">
      <div className="vidmodal-box"> 
      <div className="vidmodelclosebox">
          <img
            src={close}
            alt="닫기버튼"
            className="vidmodelClose"
            onClick={onClose}
          />
        </div>
        <div className='vidModelmaintextbox'>
            <p className='vidModelmaintext'>영상 업로드</p>
        </div>
        <div className='videouplodbox'>
           <input type='file'
                  accept='video/*'
                  id="video-upload"
                  onChange={handleFileChange}
                  style={{display: 'none'}}
                  />
            <label htmlFor='video-upload' className='video-upload-image'>
              <img src={video} alt='비디오 업로드 이미지' className='vidupload'/>
            </label>  
        </div>
        <p className="upload-label-text">영상을 업로드하려면 아이콘을 클릭하세요</p>
        <button className="complete-button-A" onClick={handleApply}>적용하기</button>
      </div>
    </div>
    </>
  )

}

export default Videomodel;