import React from 'react';
import { FaSearch } from "react-icons/fa";

export default function Universities() {
  return (
    <div>
      <img src="" alt="logo-image" className="logo-image"></img>
      <h1 className="universities">Universities</h1>
      <input className="form-control  " type="search" placeholder="Search Universities by Name or State" aria-label="Search"></input>
      <a className="btn btn-primary py-2 mx-0 ps-2" href="#" role="button"><FaSearch></FaSearch></a>

      <div>
        <p>Your career journey of a thousand miles starts here and we are here to walk you through it</p>
        <p>Ratings</p>
      </div>

      <div>
        <p>...into all this, don't have a choice university? </p>
        <p>...best university to me based on my course and environmet preference</p>
        <button>
          Suggest University
        </button>
      </div>

      <div className="nigeria-universities">
        <h2>Universities in Nigeria</h2>
        <ul className="university-state">
          <li><a href="#">Abia State</a></li>
          <ul className="dropdown">
            <li><a href="#">Abia University</a></li>
            <li><a href="#">Abia University</a></li>
          </ul>
          <li><a href="#">Adamawa State</a></li>
          <li><a href="#">Akwa-ibom State</a></li>
          <li><a href="#">Anambra State</a></li>
          <li><a href="#">Bauchi State</a></li>
          <li><a href="#">Benue State</a></li>
          <li><a href="#">Borno State</a></li>
          <a href="#">More States....</a>
        </ul>
      </div>

      <div>
        <ul className="footer-links">
          <li><a href="#">Academic Posts</a></li>
          <li><a href="#">Scholarship Opportunites</a></li>
          <li><a href="#">Hyperlinks</a></li>
        </ul>
      </div>

      <div>

      </div>

    </div>
  )
}


