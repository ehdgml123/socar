import '../css/carcheck.css'
import Header from './Header';
import { useState } from 'react';
import Imgmodel from './Imgmodel';
import Videomodel from './Videomodel';


const Carcheck = () => {

  const [showModal, setShowModal] = useState(false);

  const [showVidModal, setShowVidModal] = useState(false);

  
  const [uploadedImages, setUploadedImages] = useState({

    front: null,
    side : null,
    siderig : null,
    back: null,

  });


  const [uploadedVideo, setUploadedVideo] = useState(null);

return(
    <>
     <Header/>
      <div className='carcheckwrap'>
        <div className='carcheckboxs'>
            <div className='fileboxs'>
              <div className='fileimg'>
                   <div className='button3' onClick={() => setShowModal(true)}>
                      <span className="material-symbols-outlined">image</span>
                       이미지 업로드
                  </div>
              </div>
              <div className='filevid'>
                  <div className='button5' onClick={() => setShowVidModal(true)}>
                     <span className="material-symbols-outlined">smart_display</span>
                    영상 업로드
                  </div>
             </div>
            </div>
        </div>
        <div className='resultboxs'>
           <div className='resultbox'>
              <div className='resultboxMaintext'>
                  <p className='resultMaintext'>차량 파손 확인하기</p>
              </div>
              <div className='breakresultbox'>
                 <div className='breakresult'>
                    {Object.entries(uploadedImages).map(([key, value]) =>
                       
                       value ? (
                           <img key={key} 
                                src={value} 
                                alt={`${key} 이미지`} 
                                className='uploaded-image'/>
                       ) : null 
                    )}

                    {/*비디오 출력*/}
                    {uploadedVideo && (
                      <video
                       src={uploadedVideo}
                       controls
                       className='uploaded-video'/>
                    )}
                 </div>
              </div>
           </div>
        </div>
      </div>
      {showModal && <Imgmodel onClose={() => setShowModal(false)} 
      setUploadedImages={setUploadedImages}
      />}

      {showVidModal && <Videomodel onClose={() => setShowVidModal(false)}
      setUploadedVideo={setUploadedVideo} />}
    </>
)

}

export default Carcheck;