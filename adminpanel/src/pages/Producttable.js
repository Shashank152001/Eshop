import React, { useEffect,useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Spinner from '../Component/Spinner'
// useEffect(()=>{
//     Producttable(props)
// },[])

function Producttable(props) {

    const navigate=useNavigate()
    // const[load,setLoad]=useState(true)
    const{product,i}=props;
    // setLoad(true)
    
    function deleteUser(id){
      fetch(`/api/showproducts/${id}`,{
        method:'DELETE'
      }).then((res)=>{return res.json()}).then((data)=>{console.log(data)
        // setLoad(false)
        navigate('/productmanage')})
    }
  return (
    <>
    {/* {load&&<Spinner/>} */}
    
    <tr>
      <td>{i+1}</td>
        <td>{product.productname}</td>
        <td>{product.productdesc}</td>
        <td>{product.productprice}</td>
        <td>{product.status}</td>
        <td><Link to={`/productupdate/${product._id}`}><i className="bi bi-pen text-primary fs-4"></i></Link></td>
        <td><Link to={`/productmanage/${product._id}`}><i class="bi bi-trash3 text-danger fs-4" onClick={()=>deleteUser(product._id)}></i></Link></td>
    </tr>
    </>
  )
}

export default Producttable