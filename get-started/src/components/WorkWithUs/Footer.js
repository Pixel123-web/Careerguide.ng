import {
  FaRegCopyright,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const iconStyle = {
    //fontSize: "30px",
    "@media (max-width: 576px)": {
      fontSize: "10px",
    },
  };
  return (
    <div className="WorkWithFooter">
      <span>
        <FaRegCopyright /> 2021-2025 Youths and Career
      </span>
      <ul className="Socials">
        <li>
          <a href="#">
            <FaTwitter style={iconStyle} />
          </a>
        </li>
        <li>
          <a href="#">
            <FaFacebook style={iconStyle} />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram style={iconStyle} />
          </a>
        </li>
        <li>
          <a href="#">
            <FaLinkedin style={iconStyle} />
          </a>
        </li>
      </ul>
      <ul className="Policies">
        <li id="After">
          <a>Privacy Policy</a>
        </li>
        <li id="After">
          <a>Terms of Use</a>
        </li>
        <li>
          <a>Terms of Service</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
