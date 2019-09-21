
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class CarInsurence extends React.Component{
    render(){
        return (
            <div>
                <section class="mt-5 text-center bg-light">
    <div class="container ">
      <div class="row">
        <div class="col mt-2 ">
          <div class="info-header mb-5 ">
            <h2 class="pb-3 feaText">
            What's Covered Under Car Insurance?
            </h2>
           
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="card bg-light test">
            <div class="card-body ">
              <img src="https://www.acko.com/static/realm/icons/coverage_accidents.svg" />
              <h6 className="mt-4 feaText">ACCIDENTS</h6>
              <p class="text-muted">A minor error in judgement can cause a major accident. But don't worry, we’ll take care of the damages to your car everytime.</p>
              </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="card bg-light test">
            <div class="card-body ">
              <img src="https://www.acko.com/static/realm/icons/coverage_fire.svg" />
              <h6 className="mt-4 feaText">FIRE</h6>
              <p class="text-muted">It’s scary to see your car catch fire! But we’ll cover damages caused to your car due to the ones resulting from self-ignition, explosion and lightning.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="card bg-light test">
            <div class="card-body ">
              <img src="https://www.acko.com/static/realm/icons/coverage_theft.svg" />
              <h6 className="mt-4 feaText">THEFT</h6>
              <p class="text-muted">Finding out that your car is stolen can be an absolute nightmare. But we’ll pay you your car’s Insured Value in case your car gets stolen.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="card bg-light test">
            <div class="card-body ">
              <img src="https://www.acko.com/static/realm/icons/coverage_calamities.svg" />
              <h6 className="mt-4 feaText">CALAMITIES</h6>
              <p class="text-muted">Natural and man-made calamities can wreak havoc. But we’ll cover damages caused to your car because of earthquake, riots, etc.</p>
              </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="card bg-light test">
            <div class="card-body ">
              <img src="https://www.acko.com/static/realm/icons/coverage_third_party.svg" />
              <h6 className="mt-4 feaText">THIRD-PARTY LOSSES</h6>
              <p class="text-muted">Car accidents can result in injury to, and death of any third party, while also damaging property. But we’ll cover damages related to third-party losses..</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="card bg-light test">
            <div class="card-body ">
              <img src="https://www.acko.com/static/realm/icons/coverage_theft.svg" />
              <h6 className="mt-4 feaText">CAR OWNER COVER</h6>
              <p class="text-muted">A minor error in judgement can cause a major accident. But don't worry, we’ll take care of the damages to your car everytime.</p>
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
export default CarInsurence;