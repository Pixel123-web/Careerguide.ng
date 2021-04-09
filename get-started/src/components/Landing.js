import React from "react";

export default function Landing() {
  return (
    <div>
      <div>
        <section>
          <div className="container-fluid bg-light mt-5">
            <div className="container pt-5">
              <div className="offer text-center text-primary">Virtual Tour</div>
              {/* <div class="card-header text-center m-auto">What We Offer</div> */}
              <div className="row virtual_text">
                <p className="text-dark">
                  Do you want to know what it feels like to study in your most
                  preffered university? or you simply dont know how to navigate
                  your preffered institution? worry no more as we’ve got you
                  covered through the process. choose a university and start
                  your virtual tour.
                </p>
                <div className="container mt-5 mb-5">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={0}
                        className="active"
                      />
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={1}
                      />
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={2}
                      />
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          className="d-block w-50 m-auto"
                          src="./img/ui.jpg"
                          alt="First slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-50 m-auto"
                          src="./img/ui.jpg"
                          alt="Second slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-50 m-auto"
                          src="./img/ui.jpg"
                          alt="Third slide"
                        />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
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
            <div className="text-dark text-uppercase text-center mt-3 font-weight-bold">
              reviews from past users
            </div>
            <div className="container">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={0}
                    className="active"
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={1}
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={2}
                  />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    {/* <img class="d-block w-50 m-auto" src="./img/ui.jpg" alt="First slide"> */}
                    <div className="row mt-5">
                      <div className="col-sm-4 m-auto">
                        <div className="card">
                          <div className="card-body m-auto text-center">
                            <img
                              className="rounded-circle"
                              src="./img/elon.jpg"
                              alt
                              width="150px"
                              height="150px"
                            />
                            <h5 className="card-title">Daniel Bamidele</h5>
                            <h6 className="card-title">University of Lagos</h6>
                            <span className="card-text">
                              Mass Communication
                            </span>
                            <p className="card-text">
                              Expertise and professionalism at its peak. Youths
                              and Careers was responsible for making my search
                              for a perfect university and course seamless.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 m-auto">
                        <div className="card">
                          <div className="card-body m-auto text-center">
                            <img
                              className="rounded-circle"
                              src="./img/elon.jpg"
                              alt
                              width="150px"
                              height="150px"
                            />
                            <h5 className="card-title">Daniel Bamidele</h5>
                            <h6 className="card-title">University of Lagos</h6>
                            <span className="card-text">
                              Mass Communication
                            </span>
                            <p className="card-text">
                              Expertise and professionalism at its peak. Youths
                              and Careers was responsible for making my search
                              for a perfect university and course seamless.
                            </p>
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
                            <img
                              className="rounded-circle"
                              src="./img/elon.jpg"
                              alt
                              width="150px"
                              height="150px"
                            />
                            <h5 className="card-title">Daniel Bamidele</h5>
                            <h6 className="card-title">University of Lagos</h6>
                            <span className="card-text">
                              Mass Communication
                            </span>
                            <p className="card-text">
                              Expertise and professionalism at its peak. Youths
                              and Careers was responsible for making my search
                              for a perfect university and course seamless.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 m-auto">
                        <div className="card">
                          <div className="card-body m-auto text-center">
                            <img
                              className="rounded-circle"
                              src="./img/elon.jpg"
                              alt
                              width="150px"
                              height="150px"
                            />
                            <h5 className="card-title">Daniel Bamidele</h5>
                            <h6 className="card-title">University of Lagos</h6>
                            <span className="card-text">
                              Mass Communication
                            </span>
                            <p className="card-text">
                              Expertise and professionalism at its peak. Youths
                              and Careers was responsible for making my search
                              for a perfect university and course seamless.
                            </p>
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
                            <img
                              className="rounded-circle"
                              src="./img/elon.jpg"
                              alt
                              width="150px"
                              height="150px"
                            />
                            <h5 className="card-title">Daniel Bamidele</h5>
                            <h6 className="card-title">University of Lagos</h6>
                            <span className="card-text">
                              Mass Communication
                            </span>
                            <p className="card-text">
                              Expertise and professionalism at its peak. Youths
                              and Careers was responsible for making my search
                              for a perfect university and course seamless.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 m-auto">
                        <div className="card">
                          <div className="card-body m-auto text-center">
                            <img
                              className="rounded-circle"
                              src="./img/elon.jpg"
                              alt
                              width="150px"
                              height="150px"
                            />
                            <h5 className="card-title">Daniel Bamidele</h5>
                            <h6 className="card-title">University of Lagos</h6>
                            <span className="card-text">
                              Mass Communication
                            </span>
                            <p className="card-text">
                              Expertise and professionalism at its peak. Youths
                              and Careers was responsible for making my search
                              for a perfect university and course seamless.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid">
            <div className="container pt-5">
              <div className="text-center text-dark font-weight-bold">
                UPCOMING TRAININGS AND EVENTS
              </div>
              {/* <div class="card-header text-center m-auto">What We Offer</div> */}
              <div className="container mt-3">
                <div className="row justify-content-center">
                  <div className="col-sm-1 pt-3 text-center bg-primary text-light">
                    10 - 15 Jan
                  </div>
                  <div className="col-sm-6 pt-3 bg-light">
                    ECOSOC YOUTH FORUM 10TH ANNIVERSARY PROGRAM
                  </div>
                </div>
                <div className="row justify-content-center mt-2">
                  <div className="col-sm-1 pt-3 text-center bg-light text-primary">
                    03 - 05 August
                  </div>
                  <div className="col-sm-6 pt-3 bg-primary text-light text-uppercase">
                    Youths4Climate: Driving Ambition, Italy, Milan.{" "}
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-sm-1 pt-3 text-center bg-primary text-light mt-2">
                    24 - 25 July
                  </div>
                  <div className="col-sm-6 pt-3 bg-light">
                    YOUTHS INTERNATIONAL SUMMIT MODEL UNITED NATIONS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
