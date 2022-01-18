import './Article.scss'
import { Row, Col } from 'react-bootstrap'

function Ariticle() {
    return (
        <div className='article_container mt-3 mb-3 p-5'>
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
                    <img src="./assets/image/parallax-4.jpg" alt="article" />
                </Col>
            </Row>
        </div>
    )
}

export default Ariticle;