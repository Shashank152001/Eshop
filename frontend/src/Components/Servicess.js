import React from 'react'
import Footer from './Footer'
import {Link} from 'react-router-dom'
function Servicess() {
  return (
    <>
    <section id="products">
    <div className="container-fluid">
        <div className="row">
            <h2 className="text-center">Products</h2>
            <div class="col-md-3 card-body">
            <img src="images/sonybravia.jpg" alt=""/>
            <p className="fw-bold text-start">SonySmart TV</p>
            <p className="fw-bold text-start">Rs 35000</p>
            <p className="fw-bold text-start">HD 42 inch LED</p>
            <Link to="/products" className="btn btn-secondary">More Products</Link>
        </div>
        <div class="col-md-3 card-body">
            <img src="images/samsungtv.jpg" alt=""/>
            <p className="fw-bold text-start">SamsungUltra</p>
            <p className="fw-bold text-start">Rs 30000</p>
            <p className="fw-bold text-start">HD 42 inch LED</p>
            <Link to="/products" className="btn btn-secondary">More Products</Link>
        </div>
        <div class="col-md-3 card-body">
            <img src="images/sonytv.jpg" alt=""/>
            <p className="fw-bold text-start">Sony5009 TV</p>
            <p className="fw-bold text-start">Rs 30000</p>
            <p className="fw-bold text-start">HD 42 inch LED</p>
            <Link to="/products" className="btn btn-secondary">More Products</Link>
        </div>
        <div class="col-md-3 card-body">
            <img src="images/mitv.png" alt=""/>
            <p className="fw-bold text-start">MITV7s HD</p>
            <p className="fw-bold text-start">Rs 30000</p>
            <p className="fw-bold text-start">HD 42 inch LED</p>
            <Link to="/products" className="btn btn-secondary">More Products</Link>
        </div> 
        </div>
    </div>
</section>
    <Footer/>
    </>
    
    
  )
}

export default Servicess