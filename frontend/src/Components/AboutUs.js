import React from 'react'
import Footer from './Footer'

function AboutUs() {
  return (
    <>
    <section id="aboutus">
        <div className="container-fluid">
            <div className="row">
                <h2 className='text-center text-secondary m-2'>About Us</h2>
                <div className="col-md-6">
                <img src="/images/oneplus.jpg" className='img-fluid mx-auto d-block w-80 h-80' alt="" />
                </div>
                <div className="col-md-6">
                    <p className='fs-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ad quisquam dolores? Corrupti nobis minus reprehenderit labore numquam a sequi, porro harum exercitationem tempora ab nesciunt rerum quae illo amet similique ratione quia libero dicta nemo itaque ullam debitis dolor!</p>
                </div>
            </div>
            <div className="row mt-5 mb-2">
                <div className="col-md-6">
                    <p className='fs-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus voluptates eaque amet sequi quaerat? Doloremque, adipisci illo laboriosam a similique voluptatem id natus nulla exercitationem impedit repellendus quo dolores possimus nihil quod. Voluptatibus dolorem mollitia illo explicabo earum quis ducimus.</p>
                </div>
                <div className="col-md-6">
                <img src="/images/lgtv.jpg" className='img-fluid mx-auto d-block w-80 h-80' alt="" />
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default AboutUs