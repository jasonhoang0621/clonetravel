import './Header.scss'
import TopBar from '../topBar/TopBar'
import { FaSearch, FaCocktail, FaTheaterMasks, FaCampground, FaCamera } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap'

function Header() {
    return (

        <div className="header_container" style={{ backgroundImage: 'url(./assets/image/parallax-2.jpg)' }}>
            <TopBar />

            <div className="header_content_container">
                <div className="header_content">
                    <h1 className='header_content_header'>Search your next <span className='header_content_holiday'>Holiday</span></h1>
                    <h5 className='header_content_subheader'>CHECK OUR BEST PROMOTIONS</h5>


                    <Col>
                        <div className="header_search">
                            <input type="text" className='header_content_input' placeholder='Chooose your Destination ...' />
                            <FaSearch className='header_search_icon' />
                        </div>
                    </Col>

                    <div className="header_activities">
                        <Row className='gx-5'>
                            <Col md={3} xs={12}>
                                <div className="header_actitivities_item">
                                    <FaCocktail className='header_activities_icon' />
                                    <div>Relax</div>
                                </div>

                            </Col>
                            <Col md={3} xs={12}>
                                <div className="header_actitivities_item">
                                    <FaTheaterMasks className='header_activities_icon' />
                                    <div>Cultural</div>
                                </div>
                            </Col>
                            <Col md={3} xs={12}>
                                <div className="header_actitivities_item">
                                    <FaCampground className='header_activities_icon' />
                                    <div>Sport</div>
                                </div>
                            </Col>
                            <Col md={3} xs={12}>
                                <div className="header_actitivities_item">
                                    <FaCamera className='header_activities_icon' />
                                    <div>History</div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Header;