import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div>
    <footer  className="bg-dark">
    <div className="container">
      <div className="row">
        <div className="col text-left">
          <div className="py-4">
          <img  src="https://www.acko.com/static/realm/logo.png"></img>
           <p className="whiteText">Copyright &copy; 2017</p>
           <p className="whiteText">Unit No. 301 & 302, 3rd Floor, F wing, Lotus Corporate Park, Off Western Express Highway, Jay Coach, Goregaon East, Mumbai 400063.</p>
           <p className="whiteText">Email: hello@acko.com</p> 
           <p className="whiteText">Phone: 1860 266 2256</p>
          </div>
        </div>
        <div className="col text-center">
          <div className="py-4">
            <h5 className="whiteText">Company</h5>
            <p className="whiteText">About Us</p>
            <p className="whiteText">Borad of directors</p>
            <p className="whiteText">carres</p>
            <p className="whiteText">Media kit</p>
            <p className="whiteText">Partnership</p>
            <p className="whiteText">Site Map</p>
          </div>
        </div>
        <div className="col text-center">
          <div className="py-4">
            <h1 className="h3">ACKO</h1>
            <p>Copyright &copy; 2017</p>
            <button className="btn btn-primary" data-toggle="modal" data-target="#contactModal">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  </footer>
            </div>
        );
    }
}
export default Footer;