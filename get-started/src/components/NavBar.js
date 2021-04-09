import { FaSearch } from "react-icons/fa";

const NavBar = () => {
<<<<<<< HEAD
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-light navbar-light ">
      <div className="container-fluid">
<<<<<<< HEAD
        <a className="navbar-brand" href="/#">
          <img
            src="https://i.ibb.co/bPftGwh/logo-1-removebg.png"
            alt="youthsandcareers logo"
            width="50"
            height="30"
          ></img>
        </a>
        <div className="navbar-brand">
          <p className="text-primary fs-4 mx-0 my-auto">YouthsandCareers</p>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span cl assName="navbar-toggler-icon"></span>
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
                    href="#"
                  >
                    Scholarships
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-light nav-link px-2"
                    href="#"
                  >
                    Mentorships
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-light nav-link px-2"
                    href="#"
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
=======
        <a className="navbar-brand" href="#">
          <img src="https://i.ibb.co/bPftGwh/logo-1-removebg.png" alt="youthsandcareers logo" width="50" height="30"></img>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll " >
            <li className="nav-item">
              <a className="nav-link  ms-3 text-dark" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle ms-3 text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Universities
=======
    return ( 
        <nav className="navbar sticky-top navbar-expand-lg bg-light navbar-light ">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
      <img src="https://i.ibb.co/bPftGwh/logo-1-removebg.png" alt="youthsandcareers logo" width="50" height="30"></img>
    </a>
      <div className="navbar-brand">
        <p className = "text-primary fs-4 mx-0 my-auto" >YouthsandCareers</p>
      </div>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll " >
        <li className="nav-item">
          <a className="nav-link  ms-3 text-dark" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle ms-3 text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Universities
>>>>>>> e4d880ac6b596cd948b3a905f4cd4ffc29cb9073
          </a>
<<<<<<< HEAD
              <ul class="dropdown-menu dropdown-menu-custom ms-3 px-3" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item text-light nav-link px-2" href="#">Courses</a></li>
                <li><a className="dropdown-item text-light nav-link px-2" href="#">Mentorships</a></li>
                <li><a className="dropdown-item text-light nav-link px-2" href="#">Scholarships</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle ms-3 text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Explore
=======
          <ul class="dropdown-menu dropdown-menu-custom ms-3 px-3" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item text-light nav-link px-2" href="#"></a></li>
            <li><a className="dropdown-item text-light nav-link px-2" href="#"></a></li>
            <li><a className="dropdown-item text-light nav-link px-2" href="#"></a></li>
            <li><a className="dropdown-item text-light nav-link px-2" href="#"></a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle ms-3 text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Explore
>>>>>>> 5fed54e6f838d8bec3c629cfb0f6604dbbe4feae
          </a>
<<<<<<< HEAD
              <ul class="dropdown-menu dropdown-menu-custom ms-3 px-3" aria-labelledby="navbarDropdown">
<<<<<<< HEAD
                <li><a className="dropdown-item text-light nav-link px-2" href="#">Virtual tours</a></li>
                <li><a className="dropdown-item text-light nav-link px-2" href="#">Global events</a></li>
                <li><a className="dropdown-item text-light nav-link px-2" href="#">About us</a></li>
              </ul>
            </li>
          </ul>
          <table className = "elementsContainer ">
      <tr>
        <td>
        <input className="form-control  " type="search" placeholder="Search" aria-label="Search"></input>
        </td>
        <td>
        <a className="btn btn-primary py-2 mx-0 ps-2" href="#" role="button"><FaSearch></FaSearch></a>
        </td>
      </tr>
    </table>
=======
                <li><a className="dropdown-item text-light nav-link px-2" href="#">Scholarships</a></li>
                <li><a className="dropdown-item text-light nav-link px-2" href="#">Mentorships</a></li>
                <li><a className="dropdown-item text-light nav-link px-2" href="#">Global Events</a></li>
                <li><a className="dropdown-item text-light nav-link px-2" href="#">Blogs</a></li>
>>>>>>> 45d24045be2b49c90a867002aa90b7919a22d884
              </ul>
            </li>
          </ul>
          <table className="elementsContainer ">
            <tr>
              <td>
<<<<<<< HEAD
                <input
                  className="form-control  "
                  type="search"
                  placeholder="Find a University, Location or course"
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
=======
                <input className="form-control  " type="search" placeholder="Find a University, Location or course" aria-label="Search"></input>
              </td>
              <td>
                <a className="btn btn-primary py-2 mx-0 ps-2" href="#" role="button"><FaSearch></FaSearch></a>
>>>>>>> 45d24045be2b49c90a867002aa90b7919a22d884
              </td>
            </tr>
          </table>
>>>>>>> 5fed54e6f838d8bec3c629cfb0f6604dbbe4feae
        </div>
      </div>
    </nav>
  );
<<<<<<< HEAD
};

export default NavBar;
=======
}

export default NavBar;
>>>>>>> 45d24045be2b49c90a867002aa90b7919a22d884
=======
          <ul class="dropdown-menu dropdown-menu-custom ms-3 px-3" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item text-light nav-link px-2" href="#">Scholarships</a></li>
            <li><a className="dropdown-item text-light nav-link px-2" href="#">Mentorships</a></li>
            <li><a className="dropdown-item text-light nav-link px-2" href="#">Global Events</a></li>
            <li><a className="dropdown-item text-light nav-link px-2" href="#">Blogs</a></li>
          </ul>
        </li>
      </ul> 
      <table className = "elementsContainer ">
      <tr>
        <td>
        <input className="form-control  " type="search" placeholder="Find a University, Location or course" aria-label="Search"></input>
        </td>
        <td>
        <a className="btn btn-primary py-2 mx-0 ps-2" href="#" role="button"><FaSearch></FaSearch></a>
        </td>
      </tr>
    </table>
    </div>
  </div>
</nav>
     );
}
 
export default NavBar;
>>>>>>> e4d880ac6b596cd948b3a905f4cd4ffc29cb9073
