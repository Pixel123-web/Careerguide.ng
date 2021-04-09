import { FaSearch } from "react-icons/fa";
import style from "../NavBar";

const NavBar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg  navbar-light ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          <img
            src="https://i.ibb.co/bPftGwh/logo-1-removebg.png"
            alt="youthsandcareers logo"
            width="50"
            height="30"
          ></img>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll ">
            <li className="nav-item">
              <a
                className="nav-link  ms-3 text-dark"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle ms-3 text-dark"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Universities
              </a>
              <ul
                class="dropdown-menu dropdown-menu-custom ms-3 px-3"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a
                    className="dropdown-item text-light nav-link px-2"
                    href="/virtual"
                  >
                    Virtual
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-light nav-link px-2"
                    href="#"
                  ></a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-light nav-link px-2"
                    href="#"
                  ></a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-light nav-link px-2"
                    href="#"
                  ></a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle ms-3 text-dark"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Explore
              </a>
              <ul
                class="dropdown-menu dropdown-menu-custom ms-3 px-3"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a
                    className="dropdown-item text-light nav-link px-2"
                    href="/scholarships"
                  >
                    Scholarships
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-light nav-link px-2"
                    href="/mentorships"
                  >
                    Mentorships
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-light nav-link px-2"
                    href="#/global events"
                  >
                    Global Events
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-light nav-link px-2"
                    href="#"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <table className="elementsContainer ">
            <tr>
              <td>
                <input
                  className="form-control  "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
              </td>
              <td>
                <a
                  className="btn btn-primary py-2 mx-0 ps-2"
                  href="#"
                  role="button"
                >
                  <FaSearch></FaSearch>
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
