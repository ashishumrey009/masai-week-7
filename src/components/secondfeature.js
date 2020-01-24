import React from 'react';

class SecondFtr extends React.Component{
    render(){
        return(
            <div>
                 <section className="my-5 ">
  <div className="container ">
    <div class="row">
      <div className="col-md-6">
      <img src="https://www.acko.com/static/realm/images/Homepage_Killer_Prices.svg" height="220px" />
      </div>
      <div className="col-md-6">
          <p>INCREDIBLY LOW PRICES</p>
          <h2 className="feaText">Prices That Can’t Get Any Better.</h2>
          <div className="d-flex flex-row">
            <div className="p-4 align-self-start">
              <i className="fa fa-check"></i>
            </div>
            <div className="p-4 align-self-end ">
            <p className="text-muted">We spend a lot less on running an insurance company when you buy directly from us. We simply pass on the savings to you. Also, by creating a community of great drivers who take care of their cars, we ensure that your premiums decrease generously. So just sit back, as we blow your mind off with our amazing deals</p>
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
export default SecondFtr;