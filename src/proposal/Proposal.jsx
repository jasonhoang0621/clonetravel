import './Proposal.scss'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Proposal() {
    return (
        <div className="proposal_container p-5 pt-md-5 pb-md-5 pt-md-0 pe-md-0">
            <div className="proposal_header mb-5">
                <div>OUR PROPOSALS</div>
                <h2>OUR <span>DESTINATIONS</span></h2>
            </div>

            <Row>
                <Col md={4}>
                    <div className="destination_card">
                        <img src="./assets/image/destination-9.jpg" alt="" />
                        <div className="destination_desciprtion">
                            <div className='destination_label'>Europe</div>
                            <div className='destination_package'>3 PACKAGES</div>
                        </div>

                        <div className="destination_card_hover">
                            <div className="destination_card_hover_container">
                                <div className="destination_package">
                                    <h5 className='mb-3'>Packages</h5>
                                    <ul className='mb-4'>
                                        <li>Berlin</li>
                                        <li>Amsterdam</li>
                                        <li>Tuscany</li>
                                    </ul>
                                    <button>VIEW DESTINATION</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div className="destination_card">
                        <img src="./assets/image/destination-5-720x720.jpg" alt="" />
                        <div className="destination_desciprtion">
                            <div className='destination_label'>Thailandia</div>
                            <div className='destination_package'>1 PACKAGES</div>
                        </div>

                        <div className="destination_card_hover">
                            <div className="destination_card_hover_container">
                                <div className="destination_package">
                                    <h5 className='mb-3'>Packages</h5>
                                    <ul className='mb-4'>
                                        <li>Phuket</li>

                                    </ul>
                                    <button>VIEW DESTINATION</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div className="destination_card">
                        <img src="./assets/image/destination-8.jpg" alt="" />
                        <div className="destination_desciprtion">
                            <div className='destination_label'>Asia</div>
                            <div className='destination_package'>2 PACKAGES</div>
                        </div>

                        <div className="destination_card_hover">
                            <div className="destination_card_hover_container">
                                <div className="destination_package">
                                    <h5 className='mb-3'>Packages</h5>
                                    <ul className='mb-4'>
                                        <li>Hong Kong</li>
                                        <li>Phuket</li>

                                    </ul>
                                    <button>VIEW DESTINATION</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div className="destination_card">
                        <img src="./assets/image/destination-10.jpg" alt="" />
                        <div className="destination_desciprtion">
                            <div className='destination_label'>Italy</div>
                            <div className='destination_package'>1 PACKAGES</div>
                        </div>

                        <div className="destination_card_hover">
                            <div className="destination_card_hover_container">
                                <div className="destination_package">
                                    <h5 className='mb-3'>Packages</h5>
                                    <ul className='mb-4'>
                                        <li>Tuskany</li>
                                    </ul>
                                    <button>VIEW DESTINATION</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div className="destination_card">
                        <img src="./assets/image/destination-11.jpg" alt="" />
                        <div className="destination_desciprtion">
                            <div className='destination_label'>Netherlands</div>
                            <div className='destination_package'>1 PACKAGES</div>
                        </div>

                        <div className="destination_card_hover">
                            <div className="destination_card_hover_container">
                                <div className="destination_package">
                                    <h5 className='mb-3'>Packages</h5>
                                    <ul className='mb-4'>
                                        <li>Amsterdam</li>
                                    </ul>
                                    <button>VIEW DESTINATION</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div className="destination_card">
                        <img src="./assets/image/destination-1-1-720x720.jpg" alt="" />
                        <div className="destination_desciprtion">
                            <div className='destination_label'>United State</div>
                            <div className='destination_package'>1 PACKAGES</div>
                        </div>

                        <div className="destination_card_hover">
                            <div className="destination_card_hover_container">
                                <div className="destination_package">
                                    <h5 className='mb-3'>Packages</h5>
                                    <ul className='mb-4'>
                                        <li>San Francisco</li>
                                    </ul>
                                    <button>VIEW DESTINATION</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default Proposal;