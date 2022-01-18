import './HorizontalBreak.scss'
import { Row, Col } from 'react-bootstrap'

function HorizontalBreak(props) {
    return (
        <>
            {props.image.length === 1 ?
                <div className='horizontal_break_container' style={{ backgroundImage: `url(${props.image[0]})` }}>
                    <Row className="horizontal_content p-5">
                        <Col md={{ span: 6, offset: 3 }}>
                            <Row>
                                <Col xs={12} md={6} className='text-start'>
                                    <h1>Your</h1>
                                    <h1>Next <span>Holiday</span></h1>
                                </Col>
                                <Col xs={12} md={6} className='m-auto text-center'>
                                    <a href="/#">VIEW ALL PACKAGES</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                :
                <Row>
                    <Col md={6} xs={12} className='horizontal_break_container' style={{ backgroundImage: `url(${props.image[0]})` }}>
                        <div className="horizontal_content p-5 text-center">
                            <div>01.LAST MINUTE</div>
                            <h2 className='mt-3 mb-4'>Discover Cities</h2>
                            <a href="/#">DETAILS</a>
                        </div>
                    </Col>
                    <Col md={6} xs={12} className='horizontal_break_container' style={{ backgroundImage: `url(${props.image[1]})` }}>
                        <div className="horizontal_content p-5 text-center">
                            <div>01.LAST MINUTE</div>
                            <h2 className='mt-3 mb-4'>Discover Cities</h2>
                            <a href="/#">DETAILS</a>
                        </div>
                    </Col>
                </Row>
            }
        </>
    )
}

export default HorizontalBreak;