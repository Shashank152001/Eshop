import React from 'react'
import {Link} from 'react-router-dom'
import {LoginContext} from '../LoginContext'
import {useContext} from 'react'
function ProductStr(props) {
    const{products}=props
    const{cart,setCart}=useContext(LoginContext)
    function handleAddcart(e,products){
        // console.log(products._id)
        let _cart = {...cart}
      if(!_cart.items){
         _cart.items={}
      }
      if(_cart.items[products._id]){
         _cart.items[products._id] +=1
      }else{
         _cart.items[products._id]=1
      }
      if(!_cart.totalItems){
         _cart.totalItems=0
      }
      _cart.totalItems +=1;
     
      setCart(_cart)
      console.log(cart)
    }
  return (
    <>
    <div className="card" style={{width: '18rem'}}>
    <img src={products.img} style={{width:'250px'}} className="card-img-top mx-auto d-block" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{products.productname}</h5>
    <p className="card-text">{products.productdesc}.</p>
    <p className="card-text">{products.productprice}.</p>
    <button className="btn btn-success me-2" onClick={(e)=>{handleAddcart(e,products)}}>Add Cart</button>
    <Link to={`/moredetails/${products._id}`}><button className="btn btn-primary me-2">More Details</button></Link>
    
    
  </div>
</div>
    </>
  )
}

export default ProductStr