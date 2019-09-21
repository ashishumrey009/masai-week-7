import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Navbar extends React.Component{
render(){
    return(
      <div>
     <nav className="navbar navbar-expand-sm  fixed-top navColor">
     <div className="container-fluid">
      <a  className="navbar-brand"><img className="logoLeft" src="https://www.acko.com/static/realm/logo.png"></img></a>
      <div className=" text-wrap wraplogo navText" >
      GENERAL INSURANCE
      IRDAI Regn. No. 157 PRODUCTS
      </div>
      <a href="#create-head-section" className="nav-link navText">PRODUCT</a>
      <a href="#share-head-section" className="nav-link navText">CLAIMNS</a>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
           <li className="nav-item">
            <a href="#home" className="nav-link">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

      </div>
    );
}
} 
export default Navbar;