import '../css/inquiry.css'
import Header from './Header';

const Inquiry = () => {

    return (
      <>
        <Header />
        <div className="inquirywrap">
           <div className='maintextbox'>
               <h1 className='maintext'>
                  문의 하기
               </h1>
           </div>
          <div className="inquirybox">
            <form className="form_area">
              <ul>
                <li>
                  <input
                    type="text"
                    name="wr_name"
                    className="sh_input"
                    required
                  />
                  <label>이름</label>
                </li>
                <li>
                  <input
                    type="text"
                    name="sh_phone"
                    className="sh_input"
                    pattern="\d*"
                    maxLength="20"
                    required
                  />
                  <label>이메일</label>
                </li>
                <li>
                  <textarea name="wr_content" className="sh_input" />
                  <label>문의내용</label>
                </li>
              </ul>

              <div className="prv_area">
                <a
                  href="#!"
                  onClick={() =>
                    window.open(
                      "",
                      "popup",
                      "width=600,height=800,left=150,top=0"
                    )
                  }
                >
                  개인정보취급방침
                </a>
                <label htmlFor="prv_check">동의</label>
                <input type="checkbox" id="prv_check" className="ck_box" />
              </div>

              <input type="submit" value="상담 신청하기" className="send" />
            </form>
          </div>
        </div>
      </>
    );
}

export default Inquiry;