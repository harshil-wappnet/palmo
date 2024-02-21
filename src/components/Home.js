import React from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import image1 from "../assets/images/header-img.jpg"
import image2 from "../assets/images/dessert.jpg"
import image3 from "../assets/images/gallery2.jpg"
function Home() {
    return (
        <>
            <Container className='home img-fluid'>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={image1} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={image2} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={image3} alt="Third slide" />
                    </Carousel.Item>
                </Carousel>

                <Row className="my-5 flex-lg-row flex-sm-column-reverse flex-md-row">
                    <Col xs={12} md={7}>
                        <p>A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings</p>
                    </Col>
                    <Col xs={12} md={5}>
                        <img src={image2} alt="img here" className="w-100" />
                    </Col>
                </Row>

                <Row className="my-5 flex-lg-row-reverse flex-row-reverse">
                    <Col xs={12} md={7}>
                        <p>A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings</p>
                    </Col>
                    <Col xs={12} md={5}>
                        <img src={image2} alt="img here" className="w-100" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
