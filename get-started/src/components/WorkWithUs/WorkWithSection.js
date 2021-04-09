import ButtonHelp from "./ButtonHelp";
import { Container, Row } from "react-bootstrap";
import Footer from "./Footer";
const WorkWithSection = () => {
  return (
    <div className="WorkWithSection">
      <div id="section">
        <ul>
          <li>
            <span>About Us</span>
          </li>
          <li>
            <a href="#">Our Partners</a>
          </li>
          <li>
            <a href="#">Advertise</a>
          </li>
          <li>
            <a href="#">Get Involved</a>
          </li>
        </ul>
        <ul>
          <li>
            <span>Resources</span>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Virtual Tour</a>
          </li>
          <li>
            <a href="#">Tutorials</a>
          </li>
        </ul>
        <ul>
          <li>
            <span>Services</span>
          </li>
          <li>
            <a href="#">Advice</a>
          </li>
          <li>
            <a href="#">Scholarships</a>
          </li>
          <li>
            <a href="#">Tutorials</a>
          </li>
        </ul>
      </div>
      <div className="Extras">
        <ButtonHelp />
      </div>
      <Footer />
    </div>
  );
};

export default WorkWithSection;
