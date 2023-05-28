import React from 'react'
import AdminLeft from './AdminLeft'
import {useParams,useNavigate} from 'react-router-dom'
import {useEffect,useState} from 'react'
function AdminProductUpdate() {
    const{id}=useParams()
    const navigate=useNavigate()
    const[productname,setProductName]=useState('')
    const[productdesc,setProductDesc]=useState('')
    const[productprice,setProductPrice]=useState('')
    const[status,setStatus]=useState('')
    useEffect(()=>{
        fetch(`/api/showsingleproduct/${id}`).then((res)=>{return res.json()}).then((data)=>{
            console.log(data)
            setProductName(data.productname)
            setProductDesc(data.productdesc)
            setProductPrice(data.productprice)
            setStatus(data.status)
        })
    },[])
    function handleForm(e){
      e.preventDefault();
      const formData={productname,productdesc,productprice,status}
      fetch(`/api/${id}`,{
        method:'PUT',
        headers:{ "Content-Type": "application/json" },
        body:JSON.stringify(formData)
      }).then((res)=>{return res.json()}).then((data)=>{
        if(data.message){
          navigate('/productmanage')
        }
      })
    }
  return (
    <>
    <section id="admindashborad">
      <div className="container-fluid">
        <div className="row">
          
            <AdminLeft/>
          
          <div className="col-md-9">
          <h2 className='text-start fs-2 mt-3 text-secondary'>Product Update</h2>
          <form method="post" onSubmit={(e)=>{handleForm(e)}}>
            <label htmlFor="" className='form-label'>Product Name</label>
            <input type="text" name="" id=""
            value={productname}
            onChange={(e)=>{setProductName(e.target.value)}}
            className='form-control'/>
            <label htmlFor="" className='form-label'>Product Desc</label>
            <input type="text" name="" id="" value={productdesc}
            onChange={(e)=>{setProductDesc(e.target.value)}}
            className='form-control'/>
            <label htmlFor="" className='form-label'>Product Price</label>
            <input type="text" name="" id="" value={productprice}
            onChange={(e)=>{setProductPrice(e.target.value)}}
            className='form-control'/>
            <select name="" id="" value={status} 
            onChange={(e)=>{setStatus(e.target.value)}}
            className='form-select mt-1'>
                <option value="publish">Publish</option>
                <option value="unpublish">Unpublish</option>
            </select>
            <button type="submit" className='btn btn-success mt-2 form-control'>Submit</button>
          </form>
          </div>
        </div>
      </div>
     </section>
   
    </>
  )
}

export default AdminProductUpdate