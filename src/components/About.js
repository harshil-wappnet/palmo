import React from 'react'
import { Link } from 'react-router-dom'
// import image3 from "../assets/images/gallery4.jpg"
import AwardsData from "../data/JsonData"


export default function About() {

    return (
        <div className='container my-3'>
            <h3 id="awards">AWARDS</h3>
            <p>We are honoured to share are recent awards we
                achieved.</p>
            <div className='row justify-content-center'>
                {AwardsData.map((item, outerIndex) => (
                    <div className="card cards col-lg-3 mx-3 col-md-3 col-sm-6" key={outerIndex}>
                        <img className="card-img-top card-img-bottom img-fluid" src={item.image} alt={`Card cap-${outerIndex}`} />

                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                        <Link to="#" className="btn btn-primary">
                            Go somewhere
                        </Link>
                    </div>
                ))}
            </div>
        </div >
        // </div >
    )
}
// style = "font-size: medium;text-align: center;color: white;"