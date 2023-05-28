import React from 'react'
import Footer from './Footer'
import {LoginContext} from '../LoginContext'
import UserLeft from './UserLeft'
import {useContext} from 'react'


// import Homepage from './Homepage'

function Userdashboard() {
  const { userLoginName} = useContext(LoginContext)
  return (
    <>
     <section id="userdashborad">
      <div className="container-fluid">
        <div className="row">
          
            <UserLeft/>
          
          <div className="col-md-9">
          <h2 className='text-start fs-2 mt-3 text-secondary'>Welcome {userLoginName}</h2>
          </div>
        </div>
      </div>
     </section>
     <Footer/>
    </>
  )
}

export default Userdashboard