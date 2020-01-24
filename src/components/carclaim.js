import React from 'react';


class CarClaim extends React.Component{
    render(){
        return (
            <div>
                <section class="text-center bg-light">
    <div className="container ">
      <div className="row">
        <div className="col mt-2 ">
          <div className="info-header mb-5 ">
            <h2 className="pb-3 feaText">
            How Do We Make Car Insurance Claims Stress-Free?
            </h2>
           
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="card bg-light test">
            <div className="card-body ">
              <img src="https://www.acko.com/static/realm/icons/claimsOneHourPickup.svg" />
              <h6 className="mt-4 feaText">One Hour Pick-up*</h6>
              <p >Call us and we’ll be there in an hour to pick up your damaged car for repairs.</p>
              </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card bg-light test">
            <div className="card-body ">
              <img src="https://www.acko.com/static/realm/icons/claimsThreeDayDelivery.svg" />
              <h6 className="mt-4 feaText">3-Day Doorstep Delivery**</h6>
              <p >If we don’t repair and deliver your car within three days, we reimburse you with cab vouchers for your daily commute.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card bg-light test">
            <div className="card-body ">
              <img src="https://www.acko.com/static/realm/icons/claimsCashless.svg" />
              <h6 className="mt-1 feaText">Cashless Claims</h6>
              <p>When we say we are cashless, we really mean we are cashless across ALL garages..</p>
            </div>
          </div>
        </div>
        
      </div>
      <div clasclassNames="card-footer bg-light">
          *In Select Cities - Ahmedabad, Bengaluru, Chennai, Delhi, Hyderabad, Kolkata, Mumbai & Pune
          **Cab vouchers available in the cities mentioned above. Please refer the Terms & Conditions for more details
  </div>
</div>
</section>
            </div>
        );
    }
}
export default CarClaim;