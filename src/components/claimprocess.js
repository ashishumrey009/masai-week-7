import React from 'react';



class ClaimPrcs extends React.Component{
    render(){
        return(
            <div>
                <section className="text-center bg-white">
    <div className="container ">
      <div className="row">
        <div className="col mt-2 ">
          <div className="info-header mb-5 ">
            <h2 className="pb-3 feaText">
            How To Claim Car Insurance?
            </h2>
           
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4">
          <div className="card bg-white test">
            <div className="card-body ">
              <img src="https://www.acko.com/static/realm/icons/claimsRegister.svg" />
              <h6 className="mt-4 feaText">You Register</h6>
              <p className="text-muted">Register your claim at acko.com or call us on 1860 266 2256.</p>
              </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="card bg-white test">
            <div className="card-body ">
              <img src="https://www.acko.com/static/realm/icons/claimsPickup.svg" />
              <h6 className="mt-4 feaText">We Pick Up</h6>
              <p className="text-muted">We’ll pick up your car for repairs in the next 60 mins.*.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="card bg-white test">
            <div className="card-body ">
              <img src="https://www.acko.com/static/realm/icons/claimsRelax.svg" />
              <h6 className="mt-4 feaText">You Relax</h6>
              <p className="text-muted">Be stress-free as you track the repair status on our website.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card bg-white test">
            <div className="card-body ">
              <img src="https://www.acko.com/static/realm/icons/claimsDeliver.svg" />
              <h6 className="mt-4 feaText">We Deliver</h6>
              <p className="text-muted">We’ll drop off your car repaired and ready to go in three days.*</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer bg-white">
          *In Select Cities - Ahmedabad, Bengaluru, Chennai, Delhi, Hyderabad, Kolkata, Mumbai & Pune
          **Cab vouchers available in the cities mentioned above. Please refer the Terms & Conditions for more details
  </div>
 </div>
  </section>
            </div>
        );
    }
}
export default ClaimPrcs;