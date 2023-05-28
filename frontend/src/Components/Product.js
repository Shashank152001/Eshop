import React from 'react'
import Footer from './Footer'
import UserLeft from './UserLeft'
import {useEffect,useState} from 'react'
import ProductStr from '../pages/ProductStr'
function Product() {
  const [product,setProduct]=useState([])
  useEffect(()=>{
    fetch('/api/showpublicproduct').then((res)=>{return res.json()}).then((data)=>{
      console.log(data)
      setProduct(data)
    })
  },[])
  return (
    <>
     <section id="userdashborad">
      <div className="container-fluid">
        <div className="row">
          
            <UserLeft/>
          
          <div className="col-md-9">
          <h2 className='text-start fs-2 mt-3 text-secondary'>Product Page</h2>
          {product.map((result)=>(
            <div key={result._id} id="product">
                 <ProductStr products={result}/>
            </div>
            
          ))}
          

          </div>
        </div>
      </div>
     </section>
     <Footer/>
    </>
  )
}

export default Product