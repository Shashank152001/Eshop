import React from 'react'
import AdminLeft from './AdminLeft'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
 function AdminAddProduct() {
    const[productname,setProductName]=useState('');
    const[productdesc,setProductDesc]=useState('');
    const[productprice,setProductPrice]=useState('');
    const navigate=useNavigate();
    function handleForm(e){
        e.preventDefault(e);
        const formData={productname,productdesc,productprice};
        fetch('/api/addproducts',{
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(formData)
        }).then((res)=>{return res.json()}).then((data)=>{
            console.log(data)
            if(data._id){
                navigate('/productmanage')
            }
        })
    }
  return (
    <>
     <section id="adminproduct">
      <div className="container-fluid">
        <div className="row">
          
            <AdminLeft/>
          
          <div className="col-md-9">
          <h2 className='text-start fs-2 mt-3 text-secondary'>Add Product</h2>
          {/* <Link><button className='btn btn-success form form-control'>Add Product</button></Link> */}
          <form method="post" onSubmit={(e)=>{handleForm(e)}}>
                <label className='form-label'>Product Name</label>
                <input type="text" name="" id="" className='form-control'
                value={productname}
                onChange={(e)=>{setProductName(e.target.value)}}/>
                <label className='form-label'>Product Desc</label>
                <input type="text" name="" id="" className='form-control'
                value={productdesc}
                onChange={(e)=>{setProductDesc(e.target.value)}}/>
                <label className='form-label'>Product Price</label>
                <input type="text" name="" id="" className='form-control'
                value={productprice}
                onChange={(e)=>{setProductPrice(e.target.value  )}}/>
                <label htmlFor="" className='form-label'>Upload Product Image</label>
                <input type="file" name="" id="" className='form-control'/>
                <button type="submit" className='btn btn-primary form-control mt-2'>Submit</button>
          </form>
          </div>
        </div>
      </div>
     </section>
   
    </>
  )
}

export default AdminAddProduct