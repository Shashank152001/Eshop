import React from 'react'
import {LoginContext} from '../LoginContext'
import {useContext} from 'react'
import UserLeft from './UserLeft'
import Footer from './Footer'
function UserProfile() {
    const { userLoginName} = useContext(LoginContext)
  return (
    <>
    <section id="userprofile">
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

export default UserProfile