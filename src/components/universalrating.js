import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import person from './components/person3.jpg';
class RatingUni extends React.Component{
render(){
    return(
      <div>
         
         <section class="py-2 ">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <img src ="https://www.acko.com/static/realm/images/socialproofsreweb.png" width="1250px" height="120px"></img>
        </div>
      </div>
    </div>
  </section >
   {/*user Rating*/}
   <section class="py-5">
   <div className="conatiner-fluid">
     <div className="row">
       <div className="col-md-6  text-center">
         <img src="https://www.acko.com/static/realm/icons/starPurple.png"></img>
        <img src="https://www.acko.com/static/realm/icons/starPurple.png"></img>
        <img src="https://www.acko.com/static/realm/icons/starPurple.png"></img>
        <img src="https://www.acko.com/static/realm/icons/starPurple.png"></img>
        <div class="card text-center test">
          <div class="card-body">
          <img  alt="" class="img-fluid rounded-circle w-50 mb-3" />
            <h5 class="card-title">Rasmit loved the killer prices</h5>
            <p class="text-muted text-wrap text-center">Acko’s price was almost 50% less than other insurers for Comprehensive car insurance. Surprised!</p>
            
          </div>
        </div>
        </div>
        <div className="col-md-6   text-center">
         <img src="https://www.acko.com/static/realm/icons/starPurple.png"></img>
        <img src="https://www.acko.com/static/realm/icons/starPurple.png"></img>
        <img src="https://www.acko.com/static/realm/icons/starPurple.png"></img>
        <img src="https://www.acko.com/static/realm/icons/starPurple.png"></img>
        <div className="card text-center test">
          <div className="card-body">
            <img  src='/img/person3.jpg' alt="" class="img-fluid rounded-circle w-50 mb-3" />
            <h5 className="card-title">Subha loved our seamless claims experience</h5>
            <p className="text-muted text-wrap text-center">From query to delivery, Acko’s quick Turnaround Time made sure my experience was completely hassle-free!</p>
            
          </div>
        </div>
        </div>
     </div>
     </div>
   </section>


   {/* featues  */}
  
      </div>
    );
}
} 
export default RatingUni;