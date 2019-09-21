import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.js' 
import Cards from './components/cardfile.js'
import Unicards from './components/universalrating.js'
import FirstFtr from './components/featuresection.js'
import SecondFtr from './components/secondfeature.js'
import FourthFtr from './components/fourthfeature.js'
import StressFtr from './components/stressfeature.js'
import CarIns from './components/carinsurance.js'
import CarInsUn from './components/carinsnotcover.js'
import Carclm from './components/carclaim.js'
import ClaimPrcs from './components/claimprocess.js'
import Settle from './components/settlement.js'
import Footer from './components/footer'
function App() {
  return (
    <div className="App">
    {/* Header File */}
      <Navbar />
    {/* Card Section*/}
      <Cards />
    {/* Rating Section*/}
       <Unicards />
    {/* First Feature*/ }  
      <FirstFtr />
    {/* Second Feature*/}
       <SecondFtr />
    {/*Third Feature */}
       <FourthFtr />
   {/* stress feature*/ }
       <StressFtr />
   {/* Car Insurance*/ }
       <CarIns />
   {/*  Car Insurance not covered*/ }
       <CarInsUn />
   {/* car claims*/}
       <Carclm />
   {/* car claims Process*/}
     <ClaimPrcs />
   {/* settlement */}
      <Settle />
   {/* footer */}
   <Footer />
</div>
  );
}

export default App;
