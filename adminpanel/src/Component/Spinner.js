import React from 'react'
import loader from './loader.gif'

function Spinner() {
  return (
    <div className='text-center fs-1 m-5'>
        <img src={loader} className='img-fluid mx-auto d-block' alt="loading" />
    </div>
  )
}

export default Spinner