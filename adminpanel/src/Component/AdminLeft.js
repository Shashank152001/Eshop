import React from 'react'
import {Link} from 'react-router-dom'
function AdminLeft() {
  return (
    <>
    <div className='col-md-3 mt-3'>
        
        <Link to="/profile"><button className='btn btn-primary mt-2 form-control'>Profile Page</button></Link><br />
        <Link to="/productmanage"><button className='btn btn-primary mt-2 mb-2 form-control'> Product Page</button></Link><br />
        
        
    </div>
    </>
  )
}

export default AdminLeft