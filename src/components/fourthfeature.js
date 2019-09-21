import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class FourthFtr extends React.Component{
    render(){
        return(
            <div>
                <section className="my-5 ">
  <div className="container ">
    <div className="row">
        <div className="col-md-6">
          <p>TERRIBLY CONVENIENT</p>
          <h2 className="feaText">One Tap To Do It All.</h2>
          <div className="d-flex flex-row">
            <div className="p-4 align-self-start">
              <i className="fa fa-check"></i>
            </div>
            <div className="p-4 align-self-end ">
            <p className="text-muted">We hate paperwork as much as you do. That’s why we help you deal with insurance instantly, simply at the tap of a button. Whether it’s purchase, support, claims, or renewal, our support team is always here for you</p>
            </div>
          </div>
          </div>
          <div className="col-md-6">
      <img src="https://www.acko.com/static/realm/images/Homepage_Terribly_Convenient.svg" height="220px" />
      </div>
    </div>
  </div>
  </section>
            </div>
        );
    }
}
export default FourthFtr