import './Package.scss'
import { Row, Col } from 'react-bootstrap'

function Package() {
    const yelloGradientColor = 'linear-gradient(to right, #ffd205 0%, #ff9b05 100%)'
    const redGradientColor = 'linear-gradient(to right, #f76570 0%, #f78d65 100%)'
    const purpleGradientColor = 'linear-gradient(to right, #ba71da 0%, #da717b 100%)'

    return (
        <div className="package_container mt-5 mb-5 p-5">
            <div className="package_header">
                <h6>PROMOTIONS</h6>
                <h2>OUR <span>PACKAGES</span></h2>
            </div>
            <Row className="package_list">
                <Col md={4} xs={12}>
                    <div className="package-item">
                        <div className="package_item_image">
                            <img className='package_image' src="./assets/image/package-1-1024x640.jpg" alt="background" />
                            <div className="packge_image_background_icon" style={{ background: yelloGradientColor }}>
                                <img className="package_image_icon" src="/assets/icon/arch.png" alt="icon" />
                            </div>
                        </div>
                        <div className="package_item_content">
                            <div className="package_item_header">
                                <h5>Berlin</h5>
                                <div className="package_item_location">
                                    <img src="./assets/icon/icon-pin-grey.png" alt="location" />
                                    <h6>Europe</h6>
                                </div>
                            </div>
                            <div className="package_item_price_info">
                                <div className="package_item_price_category">
                                    <h6>CULTURAL</h6>
                                    <h6>RELAX <span style={{ backgroundColor: yelloGradientColor }}>+ 1</span></h6>
                                </div>
                                <div className="package_item_price">
                                    <h4>700 $</h4>
                                </div>
                            </div>
                            <div className="package_item_description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque.</p>
                            </div>
                            <div className="package_item_link_detail">
                                <a href="/#">DETAILS</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} xs={12}>
                    <div className="package-item">
                        <div className="package_item_image">
                            <img className='package_image' src="./assets/image/package-6-1024x640.jpg" alt="background" />
                            <div className="packge_image_background_icon" style={{ background: redGradientColor }}>
                                <img className="package_image_icon" src="/assets/icon/torii-gate.png" alt="icon" />
                            </div>
                        </div>
                        <div className="package_item_content">
                            <div className="package_item_header">
                                <h5>Hong Kong</h5>
                                <div className="package_item_location">
                                    <img src="./assets/icon/icon-pin-grey.png" alt="location" />
                                    <h6>Asia</h6>
                                </div>
                            </div>
                            <div className="package_item_price_info">
                                <div className="package_item_price_category">
                                    <h6>HISTORY</h6>
                                    <h6>CULTURAL <span style={{ backgroundColor: redGradientColor }}>+ 1</span></h6>
                                </div>
                                <div className="package_item_price">
                                    <h4><span>1000</span> 600 $</h4>
                                </div>
                            </div>
                            <div className="package_item_description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque.</p>
                            </div>
                            <div className="package_item_link_detail">
                                <a href="/#">DETAILS</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} xs={12}>
                    <div className="package-item">
                        <div className="package_item_image">
                            <img className='package_image' src="./assets/image/package-2-1024x640.jpg" alt="background" />
                            <div className="packge_image_background_icon" style={{ background: purpleGradientColor }}>
                                <img className="package_image_icon" src="/assets/icon/golden-gate.png" alt="icon" />
                            </div>
                        </div>
                        <div className="package_item_content">
                            <div className="package_item_header">
                                <h5>San Francisco</h5>
                                <div className="package_item_location">
                                    <img src="./assets/icon/icon-pin-grey.png" alt="location" />
                                    <h6>United Stated</h6>
                                </div>
                            </div>
                            <div className="package_item_price_info">
                                <div className="package_item_price_category">
                                    <h6>SPORT</h6>
                                    <h6>RELAX <span style={{ backgroundColor: purpleGradientColor }}>+ 1</span></h6>
                                </div>
                                <div className="package_item_price">
                                    <h4>400 $</h4>
                                </div>
                            </div>
                            <div className="package_item_description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque.</p>
                            </div>
                            <div className="package_item_link_detail">
                                <a href="/#">DETAILS</a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Package;
