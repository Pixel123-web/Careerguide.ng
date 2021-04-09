import React from 'react';
import { FaSearch } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import NavBar from "./NavBar";

export default function Universities() {
  return (
    <div className="container-fluid">
      <NavBar></NavBar>
      <div className="university-nav">
        <div>
          <h1 className="text-primary universities">Universities</h1>
        </div>
        <div className="card bg-dark text-white">
          <img src="uiimage.jpg" class="card-img" alt="university"></img>
          <div className="card-img-overlay">
            <p className="card-text">Your career journey of a thousand miles starts here and we are here to walk you through it</p>
          </div>
        </div>

        <h2 className="text-primary">List of Universities in Nigeria</h2>
        <div className="nigeria-universities row">
          <div className="col-sm-8">
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option selected>Abia State</option>
              <option value="1">Abia University</option>
              <option value="2">Abia University</option>
            </select>

            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option selected>Adamawa State</option>
              <option value="1">Adamawa University</option>
              <option value="2">Adamawa University</option>
            </select>

            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option selected>  Akwa-ibom State</option>
              <option value="1">Akwa-ibom University</option>
              <option value="2">Akwa-ibom State University</option>
            </select>

            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option selected>Anambra State</option>
              <option value="1">Anambra University</option>
              <option value="2">Anambra University</option>
            </select>

            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option selected>Bauchi State</option>
              <option value="1">Bauchi University</option>
              <option value="2">Bauchi University</option>
            </select>

            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option selected> Benue State</option>
              <option value="1"> Benue University</option>
              <option value="2"> Benue State University</option>
            </select>

            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option selected>Borno State</option>
              <option value="1">Borno  University</option>
              <option value="2">Borno  University</option>
            </select>

            <a href="#">More States....</a>
          </div>
          <div className="select-university col-sm-4">

            <div className="form-check">
              <input className="form-check-input" type="radio" name="option" id="federal" value="option1" checked />
              <label className="form-check-label" for="exampleRadios1">
                Federal
  </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="option" id="state" value="option2" />
              <label className="form-check-label" for="exampleRadios2">
                State
  </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="option" id="private" value="option3" />
              <label className="form-check-label" for="exampleRadios3">
                Private
  </label>
            </div>
          </div>
        </div>
      </div>
    </div>




  )
}

