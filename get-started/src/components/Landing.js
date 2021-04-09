import React from 'react';
import Nav from './Nav'

export default function Landing(){
  return(
    <div>
  <div>
 <Nav/>
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
      <li data-target="#carouselExampleIndicators" data-slide-to={1} />
      <li data-target="#carouselExampleIndicators" data-slide-to={2} />
    </ol>
    <div className="carousel-inner pt-5">
      <div className="carousel-item active">
        <img className="d-block w-100" src="./img/male.jpg" alt="First slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="./img/students.jpg" alt="Second slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="./img/readingstudent.jpg" alt="Third slide" />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
  <section>
    <div className="container-fluid">
      <div className="container pt-5">
        <div className="offer text-center bg-primary">What We Offer</div>
        {/* <div class="card-header text-center m-auto">What We Offer</div> */}
        <div className="row m-auto">
          <div className="col-md-3 sm-3 text-center bg-light m-4 m-auto">
            <i className="fa fa-university fa-7x mt-5" aria-hidden="true" />
            <h5 className="pt-3 font-weight-bold">Universities</h5>
            <p>
              Select a university of your choice and we would provide you with
              all necessary information
            </p>
          </div>
          <div className="col-md-3 sm-3 text-center bg-light m-4 m-auto">
            <i className="fas fa-book-open fa-7x mt-5" />
            <h5 className="pt-3 font-weight-bold">Courses</h5>
            <p>
              Get access to every resources and information you need to know about your course of choice
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container-fluid">
      <div className="container pt-5">
        {/* <div class="card-header text-center m-auto">What We Offer</div> */}
        <div className="row m-auto">
          <div className="col-md-3 sm-3 text-center bg-light m-4 m-auto">
            <i className="fa fa-university fa-7x mt-5" aria-hidden="true" />
            <h5 className="pt-3 font-weight-bold">Universities</h5>
            <p>
              Select a university of your choice and we would provide you with
              all necessary information
            </p>
          </div>
          <div className="col-md-3 sm-3 text-center bg-light m-4 m-auto">
            <i className="fas fa-book-open fa-7x mt-5" />
            <h5 className="pt-3 font-weight-bold">Courses</h5>
            <p>
              Get access to every resources and information you need to know about your course of choice
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container-fluid mt-3 latest">
      <h5 className="text-light pt-4">Latest News</h5>
      <div className="row p-3">
        <div className="col-sm-3 bg-light pt-3 rounded">
          <h5>March 30,2021</h5>
          <p>Unilag release their cut off mark for 2021/2022 Academic session.</p>
          <hr />
          <h5>MARCH 25, 2021</h5>
          <p>Lagos State University releases its supplementary admission list for 2018/2019 session</p>
          <hr />
          <h5>March 10,2021</h5>
          <p>Lagos State Scholarship has released new scholarship beneficiaries for 2018/2019 session.</p>
          <hr />
          <h5>February 25,2021</h5>
          <p>Obafemi awolowo university commences admission process for the 2019/2020 session</p>
        </div>
        <div className="col-sm-7 pt-5 p-5 m-5 text-light">
          <h4>Do you want to be the first to recieve information about offers, services, scholarships, educational materials and general updates? then sign up for our Monthly news letter</h4>
          <div className="mail">
            <input type="email" placeholder="Email Address" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container-fluid bg-light mt-5">
      <div className="container pt-5">
        <div className="offer text-center text-primary">Virtual Tour</div>
        {/* <div class="card-header text-center m-auto">What We Offer</div> */}
        <div className="row virtual_text">    
          <p className="text-dark">
            Do you want to know what it feels like to study in your most preffered university? or you simply dont know how to navigate your preffered institution? worry no more as we’ve got you covered through the process. choose a university and start your virtual tour.
          </p>
          <div className="container mt-5 mb-5">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-50 m-auto" src="./img/ui.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-50 m-auto" src="./img/ui.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-50 m-auto" src="./img/ui.jpg" alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container-fluid">
      <div className="text-dark text-uppercase text-center mt-3 font-weight-bold">reviews from past users</div>
      <div className="container">      
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* <img class="d-block w-50 m-auto" src="./img/ui.jpg" alt="First slide"> */}
              <div className="row mt-5">
                <div className="col-sm-4 m-auto">
                  <div className="card">
                    <div className="card-body m-auto text-center">
                      <img className="rounded-circle" src="./img/elon.jpg" alt width="150px" height="150px" />
                      <h5 className="card-title">Daniel Bamidele</h5>
                      <h6 className="card-title">University of Lagos</h6>
                      <span className="card-text">Mass Communication</span>
                      <p className="card-text">Expertise and professionalism at its peak. Youths and Careers was responsible for making my search for a perfect university and course seamless.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 m-auto">
                  <div className="card">
                    <div className="card-body m-auto text-center">
                      <img className="rounded-circle" src="./img/elon.jpg" alt width="150px" height="150px" />
                      <h5 className="card-title">Daniel Bamidele</h5>
                      <h6 className="card-title">University of Lagos</h6>
                      <span className="card-text">Mass Communication</span>
                      <p className="card-text">Expertise and professionalism at its peak. Youths and Careers was responsible for making my search for a perfect university and course seamless.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row mt-5">
                <div className="col-sm-4 m-auto">
                  <div className="card">
                    <div className="card-body m-auto text-center">
                      <img className="rounded-circle" src="./img/elon.jpg" alt width="150px" height="150px" />
                      <h5 className="card-title">Daniel Bamidele</h5>
                      <h6 className="card-title">University of Lagos</h6>
                      <span className="card-text">Mass Communication</span>
                      <p className="card-text">Expertise and professionalism at its peak. Youths and Careers was responsible for making my search for a perfect university and course seamless.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 m-auto">
                  <div className="card">
                    <div className="card-body m-auto text-center">
                      <img className="rounded-circle" src="./img/elon.jpg" alt width="150px" height="150px" />
                      <h5 className="card-title">Daniel Bamidele</h5>
                      <h6 className="card-title">University of Lagos</h6>
                      <span className="card-text">Mass Communication</span>
                      <p className="card-text">Expertise and professionalism at its peak. Youths and Careers was responsible for making my search for a perfect university and course seamless.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row mt-5">
                <div className="col-sm-4 m-auto">
                  <div className="card">
                    <div className="card-body m-auto text-center">
                      <img className="rounded-circle" src="./img/elon.jpg" alt width="150px" height="150px" />
                      <h5 className="card-title">Daniel Bamidele</h5>
                      <h6 className="card-title">University of Lagos</h6>
                      <span className="card-text">Mass Communication</span>
                      <p className="card-text">Expertise and professionalism at its peak. Youths and Careers was responsible for making my search for a perfect university and course seamless.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 m-auto">
                  <div className="card">
                    <div className="card-body m-auto text-center">
                      <img className="rounded-circle" src="./img/elon.jpg" alt width="150px" height="150px" />
                      <h5 className="card-title">Daniel Bamidele</h5>
                      <h6 className="card-title">University of Lagos</h6>
                      <span className="card-text">Mass Communication</span>
                      <p className="card-text">Expertise and professionalism at its peak. Youths and Careers was responsible for making my search for a perfect university and course seamless.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container-fluid">
      <div className="container pt-5">
        <div className="text-center text-dark font-weight-bold">UPCOMING TRAININGS AND EVENTS</div>
        {/* <div class="card-header text-center m-auto">What We Offer</div> */}
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-sm-1 pt-3 text-center bg-primary text-light">10 - 15 Jan</div>
            <div className="col-sm-6 pt-3 bg-light">ECOSOC YOUTH FORUM 10TH ANNIVERSARY PROGRAM</div>
          </div>
          <div className="row justify-content-center mt-2">
            <div className="col-sm-1 pt-3 text-center bg-light text-primary">03 - 05 August</div>
            <div className="col-sm-6 pt-3 bg-primary text-light text-uppercase">Youths4Climate: Driving Ambition, Italy, Milan. </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-1 pt-3 text-center bg-primary text-light mt-2">24 - 25 July</div>
            <div className="col-sm-6 pt-3 bg-light">YOUTHS INTERNATIONAL SUMMIT MODEL UNITED NATIONS</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


    </div>
  )
}