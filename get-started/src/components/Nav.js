import React from 'react'

export default function Nav(){
    return(
        <div>
             <div className="fixed-top">
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <a href="#" className="navbar-brand text-primary font-weight-bold">
        <img className="img_logo" src="https://i.ibb.co/bPftGwh/logo-1-removebg.png" alt="logo" width={80} height={50} />YouthAndCareer</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto text-dark">
          <li className="nav-item active dropdown">
            <a href="index.html" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"> Home </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a href="#" className="dropdown-item">Blog</a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">Get Involved</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown">
              Universities
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a href="#" className="dropdown-item">Courses</a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">Mentorships</a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">Scholarships</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown">
              Explore
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a href="../main/login.html" className="dropdown-item">Virtual Tour</a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">Mentorship</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark" />
  </div>
        </div>
    )
}