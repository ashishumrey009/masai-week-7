import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class StressFetre extends React.Component{
    render(){
        return(
            <div>
                <section className="my-5 ">
  <div className="container ">
    <div className="row">
      <div className="col-md-6">
      <img src="https://www.acko.com/static/realm/images/Homepage_Stress_Free_Claims.svg" height="220px" />
      </div>
      <div className="col-md-6">
          <p>ZERO-HASSLE CLAIMS</p>
          <h2 className="feaText">Throw Stress Out Of The Window.</h2>
          <div className="d-flex flex-row">
            <div className="p-4 align-self-start">
              <i className="fa fa-check"></i>
            </div>
            <div className="p-4 align-self-end ">
            <p className="text-muted">Our claims are so stress-free, it’s like taking an afternoon nap. Just give us a call and we’ll take care of everything - from picking up your car, to getting it repaired and dropping it back right at your doorstep.</p>
            </div>
          </div>
          </div>
    </div>
  </div>
  </section>
            </div>
        );
    }
}
export default StressFetre  