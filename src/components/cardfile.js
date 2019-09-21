import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Cards extends React.Component{
render(){
    return(
      <div>
          <header className="cardSection">
    <div>
      <div >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-none d-lg-block text-left">
            <img src="https://www.acko.com/static/realm/images/worldcupBanner.png" height="340px"  />  
            </div>
            <div className="col-lg-6  text-center">
            <div className="badge text-wrap badgeColor" >
                  CAR
            </div>  BIKE
              <div className="cardText">The no-brainer choice for car & bike insurance</div> 
              <form className="form-inline text-right mr-15">
              <div className="form-group mx-sm-5 mt-2">
                  <input type="text" className="form-control rounded-pill" id="inputPassword2" placeholder="Your Car Number"/>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg mb-2 mt-2 rounded-pill">View Prices</button>
              </form>
              <div className="row">
              <div className="cardTextIn  mt-5 ml-5 mr-1 mb-3 col-6">Don't know your car number ></div> 
              {/* <img  className ="mt-5 ml-0 col-0" src="https://www.acko.com/static/realm/icons/forwardPurpleIcon.png" height="12px"></img> */}
              </div>
              <div className="text-nowrap bd-highlight textWrapBdr ml-5 p-1" >
                  Already Bought an Acko Policy?
                  <a className="reLink"> Renew Now</a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
      </div>
    );
}
} 
export default Cards;