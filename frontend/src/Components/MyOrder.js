import React from 'react'
import Footer from './Footer'
import UserLeft from './UserLeft'
import {useEffect,useContext,useState} from 'react'
import {LoginContext} from '../LoginContext'
function MyOrder() {
    const {userLoginName}=useContext(LoginContext)
    const[products,setproducts]=useState([])
    useEffect(()=>{
        fetch(`/api/myorders/${userLoginName}`).then((res)=>{return res.json()}).then((data)=>{
            console.log(data);
            setproducts(data)
        })
    },[])
  return (
    <>
     <section id="userdashborad">
      <div className="container-fluid">
        <div className="row">
          
            <UserLeft/>
          
          <div className="col-md-9">
          <h2 className='text-start fs-2 mt-3 text-secondary'>Welcome {userLoginName}</h2>
          <table className='table table-hover'>
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>ProductName</th>
                    <th>ProductDesc</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            
                {products.map((result,index)=>(
                    <tbody key={result._id}>
                        <tr>
                            <td>{index+1}</td>
                            <td>{result.productname}</td>
                            <td>{result.desc}</td>
                            <td>{result.quantity}</td>
                        </tr>
                    </tbody>
                    
                   
                    
                ))}
                
            
          </table>
          </div>
        </div>
      </div>
     </section>
     <Footer/>
    </>
  )
}

export default MyOrder