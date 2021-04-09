import React from 'react';
import Nav from './Nav'

export default function Virtual(){
  return(
    <div>
  <div>
 <Nav/>
<div>
  <section id="showcase">
    <div className="overlay text-light">
      <div className="overlay-content container">
        <h1 style={{fontSize: 70, textAlign: 'center'}} className="text-uppercase">
          virtual tour
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          labore.
        </p>
      </div>
    </div>
  </section>
  <section>
    <div className="search-card container-fluid">
      <h3 className="text-center text-uppercase text-light m-auto align-content-center mt-5 p-3">
        available university in nigeria
      </h3>
    </div>
  </section>
  <section>
    <div className="container-fluid mt-3">
      <div className="container">
        <div className="row m-auto">
          <div className="col md-4">
            <div className="card text-center" style={{width: '18rem'}}>
              <img className="card-img-top" src="./img/ui.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">University of Lagos</h5>
              </div>
            </div>
          </div>
          <div className="col md-4">
            <div className="card text-center" style={{width: '18rem'}}>
              <img className="card-img-top" src="./img/ui.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">University of Ilorin</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container-fluid mt-3">
      <div className="container">
        <div className="row m-auto">
          <div className="col md-4">
            <div className="card text-center" style={{width: '18rem'}}>
              <img className="card-img-top" src="./img/ui.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">University of Ibadan</h5>
              </div>
            </div>
          </div>
          <div className="col md-4">
            <div className="card text-center" style={{width: '18rem'}}>
              <img className="card-img-top" src="./img/ui.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Convenant University</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container-fluid mt-3">
      <div className="container">
        <div className="row m-auto">
          <div className="col md-4">
            <div className="card text-center" style={{width: '18rem'}}>
              <img className="card-img-top" src="./img/ui.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Obafemi Awolowo University</h5>
              </div>
            </div>
          </div>
          <div className="col md-4">
            <div className="card text-center" style={{width: '18rem'}}>
              <img className="card-img-top" src="./img/ui.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">
                  Federeal University of Technology, Akure
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

</div>


    </div>
  )
}