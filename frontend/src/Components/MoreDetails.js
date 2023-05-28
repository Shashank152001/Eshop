import React from 'react'
import Footer from './Footer'
import { useParams,Link } from 'react-router-dom'
import {  useEffect, useState,useContext } from 'react'
import UserLeft from './UserLeft'
import { LoginContext } from '../LoginContext';
function MoreDetails() {
    const{id}=useParams();
    const {setCart,cart}= useContext(LoginContext)
    const[product,setProduct]=useState('')
    useEffect(()=>{
        fetch(`/api/moredetail/${id}`)
        .then((res)=>{return res.json()})
        .then((data)=>{console.log(data)
            setProduct(data)
        })
    },[])
    function handleAddcart(e,product){
        //console.log(products);
        let _cart = {...cart}
        if(!_cart.items){
           _cart.items={}
        }
        if(_cart.items[product._id]){
           _cart.items[product._id] +=1
        }else{
           _cart.items[product._id]=1
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
    <section id="userdashborad">
      <div className="container-fluid">
        <div className="row">
          
            <UserLeft/>
          
          <div className="col-md-9">
          <h2 className='text-start fs-2 mt-3 text-secondary'>{product.productname}</h2>
          <div className="row">
          <div className="col-md-4">
                
                <img src={product.img} style={{width:'400px'}} alt="..." className='img-fluid mx-auto d-block' />
                </div>
                <div className="col-md-3 text-center">
                <h5 className='fs-1'>{product.productname}</h5>
                <p className='fs-2'>{product.productdesc}</p>
                <p className='fs-2'>{product.productprice}</p>
                <button className="btn btn-success me-2 mb-4" onClick={(e)=>{handleAddcart(e,product)}}>Add Cart</button>
                <Link to='/product'><button className='btn btn-warning mb-4 ms-2'>Back</button></Link>
                </div>
          </div>
          
          </div>
        </div>
      </div>
     </section>
     <Footer/>
    </>
  )
}

export default MoreDetails