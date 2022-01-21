import './Footer.scss'
import { Row, Col } from 'react-bootstrap'
import { FaTwitter, FaYoutube, FaFacebook, FaGithub } from 'react-icons/fa'

function Footer() {
    return (
        <div className="footer" style={{ backgroundImage: 'url(./assets/image/parallax-7.jpg)' }}>
            <div className="footer_container mt-md-5 mb-md-5 p-5">
                <div className="footer_email">
                    <Row>
                        <Col md={{ span: 4, offset: 2 }} xs={12}>
                            <div className="footer_email_header">
                                <h6>KEEP IN TOUCH</h6>
                                <h1>Travel with us</h1>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className="footer_email_input">
                                <input type="text" />
                                <a href="/#">SEND</a>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="footer_stakeholder">
                    <div className="footer_stakeholder_content">
                        <Row>
                            <Col md={6}>
                                <img src="./assets/logo/logo-color.png" alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam et nibh condimentum venenatis eu ac magnasin. Quisque interdum est mauris, eget ullamcorper.</p>
                                <div className="footer_stakeholder_icon">
                                    <i><FaTwitter /></i>
                                    <i><FaFacebook /></i>
                                    <i><FaYoutube /></i>
                                    <i><FaGithub /></i>
                                </div>
                            </Col>
                            <Col md={6}>
                                <Row>
                                    <Col md={4}>
                                        <h6>OUR AGENCY</h6>
                                        <ul>
                                            <li>Services</li>
                                            <li>Services</li>
                                            <li>Agency</li>
                                            <li>Tourism</li>
                                            <li>Payment</li>
                                        </ul>
                                    </Col>
                                    <Col md={4}>
                                        <h6>PARTNERS</h6>
                                        <ul>
                                            <li>Booking</li>
                                            <li>RentalCar</li>
                                            <li>HostelWorld</li>
                                            <li>Trivago</li>
                                            <li>TripAdvisor</li>
                                        </ul>
                                    </Col>
                                    <Col md={4}>
                                        <h6>LAST MINUTE</h6>
                                        <ul>
                                            <li>London</li>
                                            <li>California</li>
                                            <li>Indonesia</li>
                                            <li>Europe</li>
                                            <li>Oceania</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="footer_copyright">
                    <h6>THE BEST WORDPRESS TRAVEL THEME</h6>
                    <h6>COPYRIGHT NICDARK THEMES 2018</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer;
