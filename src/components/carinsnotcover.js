import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class CarInsUnavil extends React.Component{
    render(){
        return (
            <div>
                <section class="text-center bg-white">
    <div className="container ">
      <div className="row">
        <div className="col mt-2 ">
          <div className="info-header mb-5 ">
            <h2 className="pb-3 feaText">
            What's Not Covered Under Car Insurance?
            </h2>
           
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="card bg-white test">
            <div className="card-body ">
              <img src="https://www.acko.com/static/realm/icons/coverage_illegal_driving.svg" />
              <h6 className="mt-4 feaText">ILLEGAL DRIVING</h6>
              <p className="text-muted">If you drive without a valid driving license, or under the influence of alcohol and/or other illegal substances, you will not be covered.</p>
              </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card bg-white test">
            <div className="card-body ">
              <img src="https://www.acko.com/static/realm/icons/coverage_non_accidental_damage.svg" />
              <h6 className="mt-4 feaText">NON-ACCIDENTAL DAMAGE</h6>
              <p className="text-muted">Wear & tear, breakdowns, failures, and deductibles are not covered. Also consequential damages or liabilities that arise due to car accidents will unfortunately not be covered.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card bg-white test">
            <div className="card-body ">
              <img src="https://www.acko.com/static/realm/icons/coverage_tyres.svg" />
              <h6 className="mt-4 feaText">TYRES, TUBES & ENGINE</h6>
              <p className="text-muted">Damage to tyres, tubes, and engine is not covered unless they are damaged due to an accident.</p>
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
export default CarInsUnavil