import React from 'react'
import image1 from "../assets/images/header-img.jpg"
import image2 from "../assets/images/dessert.jpg"
function Home() {
    return (
        <div className='container home'>
            <img src={image1} alt="dinner" classNameName='img-fluid' id='banner' />
            <div className="conatiner d-flex flex-row my-5">
                <div className="col-6 w-70">
                    <p>A restaurant is a business that prepares and serves food and drinks to customers. Meals are
                        generally
                        served and eaten on the premises, but many restaurants also offer take-out and food delivery
                        services. Restaurants vary greatly in appearance and offerings</p>
                </div>
                <div className="col-6 w-30">
                    <img src={image2} alt="img here" />
                </div>
            </div>
            <div className="conatiner d-flex flex-row-reverse my-5">
                <div className="col-6 w-70">
                    <p>A restaurant is a business that prepares and serves food and drinks to customers. Meals are
                        generally
                        served and eaten on the premises, but many restaurants also offer take-out and food delivery
                        services. Restaurants vary greatly in appearance and offerings</p>
                </div>
                <div className="col-6 w-30">
                    <img src={image2} alt="img here" />
                </div>
            </div>
        </div>
    )
}

export default Home
