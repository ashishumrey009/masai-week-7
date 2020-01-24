import React from 'react';

 
 class SettleMent extends React.Component{
     render(){
         return(
             <div>
                   <section className="my-5 ">
  <div className="container ">
    <div class="row">
      <div className="col-md-6">
      <img src="https://www.acko.com/static/realm/icons/claimsInstantSettlement.svg" height="220px" />
      </div>
      <div className="col-md-6">
          
          <h2 className="feaText">In case of minor damages,we offer instant settlements.</h2>
          <div className="d-flex flex-row">
            <div className="p-4 align-self-start">
              <i className="fa fa-check"></i>
            </div>
            <div className="p-4 align-self-end ">
            <p className="text-muted">Got a loose bumper, a cracked windscreen or a hanging side mirror? Get your claims settled instantly. You can then choose to go to your preferred garage, as per your convenience.</p>
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
 export default SettleMent;