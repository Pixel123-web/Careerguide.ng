import YCLogo from "../img/YCLogo.png";
import { FaAngleDown } from "react-icons/fa";
import { Container, Row, Navbar, Nav } from "react-bootstrap";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          className="WorkWithLogo"
          src={YCLogo}
          alt="YouthsandCareers Logo"
        />
      </Navbar.Brand>
      <Nav className="WorkWithNav" style={{ FontSize: "35px" }}>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">
          Universities <FaAngleDown />
        </Nav.Link>
        <Nav.Link href="#link">
          Explore <FaAngleDown />
        </Nav.Link>
        <Nav.Link href="#link">
          <SearchBar />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
