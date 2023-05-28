import React from 'react'
import {Link} from 'react-router-dom'
import AdminLeft from './AdminLeft'
import {useEffect,useState} from 'react'
import Producttable from '../pages/Producttable'
import Spinner from './Spinner'
function AdminProducts() {
  const[load,setLoad]=useState(true)
    const[products,setProducts]=useState([])
    // setLoad(true)
    useEffect(()=>{
        fetch('/api/showproducts').then((res)=>{return res.json()}).then((data)=>{
            console.log(data)
            setProducts(data)
            setLoad(false)
    })
    },[])
  return (
    <>
     <section id="adminproduct">
      <div className="container-fluid">
        <div className="row">
          
            <AdminLeft/>
          
          <div className="col-md-9">
          <h2 className='text-start fs-2 mt-3 text-secondary'>Product Management</h2>
          <Link to='/adminaddproduct'><button className='btn btn-success form form-control'>Add Product</button></Link>
          {load&&<Spinner/>}
          <table className='table table-hover'>
            <tr>
              
                <th>Sr No.</th>
                <th>Product Name</th>
                <th>Product Desc</th>
                <th>Product Price</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
           
            {products.map((result,index)=>(
                <Producttable key={result._id} product={result} i={index}/>
            ))}
            
          </table>
          </div>
        </div>
      </div>
     </section>
   
    </>
  )
}

export default AdminProducts