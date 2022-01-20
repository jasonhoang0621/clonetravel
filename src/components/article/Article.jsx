import './Article.scss'
import { Row, Col } from 'react-bootstrap'
import { useState } from 'react'

function Ariticle() {
    const [image, setImage] = useState(false)

    return (
        <div className='article_container mt-3 mb-5 p-5'>
            <Row className="article_advertise">
                <Col md={4} xs={12} className="article_advertise_info">
                    <p>NORTH AMERICA</p>
                    <h2 className='article_advertise_header'>The Best <span>Beaches</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Proin rhoncus urna dictum neque molestie ultricies mauris ac.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Proin rhoncus urna dictum neque molestie ultricies mauris ac.</p>
                    <h3 className='article_price'>
                        <span className='article_root_price'>800</span> 500 $
                        <span className='article_per_person'>/ FOR PERSON</span>
                    </h3>
                    <a href="/">BOOK NOW</a>
                </Col>
                <Col md={8} xs={12} className='article_advertise_image mt-md-0 mt-5'>
                    <img className='article_slide' src={`./assets/image/${image ? "article-1.jpg" : "article-3.jpg"}`} alt="article" onClick={() => setImage(!image)} />
                    <div className="article_advertise_time_container">
                        <div className="article_advertise_time">
                            <h1>000</h1>
                            <h6>DAYS</h6>
                        </div>
                        <div className="article_advertise_time">
                            <h1>00</h1>
                            <h6>HOURS</h6>
                        </div>
                        <div className="article_advertise_time">
                            <h1>00</h1>
                            <h6>MINUTES</h6>
                        </div>
                        <div className="article_advertise_time">
                            <h1>00</h1>
                            <h6>SECONDS</h6>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="article_trophy_container">
                <Col md={4} xs={12}>
                    <div className="article_trophy_item">
                        <div className="article_trophy_icon">
                            <img src="./assets/icon/icon-around.png" alt="icon" />
                        </div>
                        <div className="article_trophy_content">
                            <h3>World Tour</h3>
                            <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
                            <a href="/#">View more</a>
                        </div>
                    </div>
                </Col>
                <Col md={4} xs={12}>
                    <div className="article_trophy_item">
                        <div className="article_trophy_icon">
                            <img src="./assets/icon/icon-boat.png" alt="icon" />
                        </div>
                        <div className="article_trophy_content">
                            <h3>World Tour</h3>
                            <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
                            <a href="/#">View more</a>
                        </div>
                    </div>
                </Col>
                <Col md={4} xs={12}>
                    <div className="article_trophy_item">
                        <div className="article_trophy_icon">
                            <img src="./assets/icon/icon-landmark.png" alt="icon" />
                        </div>
                        <div className="article_trophy_content">
                            <h3>World Tour</h3>
                            <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
                            <a href="/#">View more</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Ariticle;