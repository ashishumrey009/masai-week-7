import React from 'react';

class FirstFeature extends React.Component{
render(){
    return(
      <div>
{/* featues  */}
<section className="feature">
  <div className="container">
      <div className="row">
        <div class="col-md-4">
          <div className="card text-center test">
            <div className="card-body">
            <img src="https://www.acko.com/static/realm/icons/killerPricesIm.png" height="50px" width="100px"></img>
            <h5 className="my-3">INCREDIBLY LOW PRICES</h5>
              <p className="text-muted">Get the best price, every single time..</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="card text-center test">
            <div className="card-body">
              <img src="https://www.acko.com/static/realm/icons/convinientIm.png" height="50px"></img>
              <h5 className="my-3">TERRIBLY CONVENIENT</h5>
              <p className="text-muted">We leverage the best technology to make insurance effortless for you.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center test">
            <div className="card-body">
            <img src="https://www.acko.com/static/realm/icons/stressFreeClaimsIm.png" height="50px"></img>
            <h5 className="my-3">ZERO-HASSLE CLAIMS</h5>
              <p className="text-muted">Just click and claim. We'll take care of everything else..</p>
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
export default FirstFeature;