import { Link } from "react-router-dom";
import "../css/inquiry.css";
import Header from "./Header";

const Inquiry = () => {
  return (
    <>
      <Header />
      <div className="inquirywrap">
        <div className="maintextbox">
          <h1 className="maintext">문의 게시판</h1>
        </div>
        <div className="inquirybox">
          <table>
            <thead>
              <tr>
                <th style={{ width: "124px" }}>번호</th>
                <th style={{ width: "52%" }}>제목</th>
                <th style={{ width: "209px" }}>글쓴이</th>
                <th>작성시간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>James</td>
                <td>Matman</td>
                <td>(713) 123-8965</td>
                <td>
                  <a href="mailto:jmatman@stewart.com">jmatman@stewart.com</a>
                </td>
              </tr>
              <tr>
                <td>Johnny</td>
                <td>Smith</td>
                <td>(713) 584-9614</td>
                <td>
                  <a href="mailto:jsmith@stewart.com">jsmith@stewart.com</a>
                </td>
              </tr>
              <tr>
                <td>Susan</td>
                <td>Johnson</td>
                <td>(713) 847-1124</td>
                <td>
                  <a href="mailto:sjohnson@stewart.com">sjohnson@stewart.com</a>
                </td>
              </tr>
              <tr>
                <td>Tracy</td>
                <td>Richardson</td>
                <td>(713) 245-4821</td>
                <td>
                  <a href="mailto:trichard@stewart.com">trichard@stewart.com</a>
                </td>
              </tr>
            </tbody>
          </table>
          <Link to="/inquiryCreate" className="Picton_2">
            문의 하기
          </Link>
        </div>
      </div>
    </>
  );
};

export default Inquiry;
