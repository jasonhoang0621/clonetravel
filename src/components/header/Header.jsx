import './Header.scss'
import TopBar from '../topBar/TopBar'
import {
    FaSearch, FaCocktail, FaTheaterMasks, FaCampground, FaCamera, FaFilter, FaAngleDown, FaListUl,
    FaEllipsisH, FaCalendarAlt, FaMapMarkerAlt
} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import LeftMenu from '../leftMenu/LeftMenu'

function Header(props) {
    const [leftMenu, setLeftMenu] = useState(false)

    const openLeftMenu = () => setLeftMenu(true)
    const closeLeftMenu = () => setLeftMenu(false)

    return (
        <>
            {props?.home &&
                <div className="header_container" style={{ backgroundImage: 'url(./assets/image/parallax-2.jpg)' }}>
                    <TopBar openLeftMenu={openLeftMenu} />

                    <div className="header_content_container">
                        <div className="header_content">
                            <h1 className='header_content_header'>Search your next <span className='header_content_holiday'>Holiday</span></h1>
                            <h5 className='header_content_subheader'>CHECK OUR BEST PROMOTIONS</h5>


                            <Col>
                                <div className="header_search">
                                    <input type="text" className='header_content_input' placeholder='Choose your Destination ...' />
                                    <FaSearch className='header_search_icon' />
                                </div>
                            </Col>

                            <div className="header_activities">
                                <Row className='gx-5'>
                                    <Col md={3} xs={12}>
                                        <div className="header_activities_item">
                                            <FaCocktail className='header_activities_icon' />
                                            <div>Relax</div>
                                        </div>

                                    </Col>
                                    <Col md={3} xs={12}>
                                        <div className="header_activities_item">
                                            <FaTheaterMasks className='header_activities_icon' />
                                            <div>Cultural</div>
                                        </div>
                                    </Col>
                                    <Col md={3} xs={12}>
                                        <div className="header_activities_item">
                                            <FaCampground className='header_activities_icon' />
                                            <div>Sport</div>
                                        </div>
                                    </Col>
                                    <Col md={3} xs={12}>
                                        <div className="header_activities_item">
                                            <FaCamera className='header_activities_icon' />
                                            <div>History</div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div >}

            {props.search1 &&
                <div className="header_container" style={{ backgroundImage: 'url(./assets/image/parallax-search-2.jpg)' }}>
                    <TopBar openLeftMenu={openLeftMenu} />

                    <div className="header_search_content">
                        <h6 className='header_content_search1_subheader'>OUR PACKAGES</h6>
                        <h1 className='header_content_search1_header'>Search your <span>Holiday</span></h1>

                        <div className="header_search_filter">
                            <Row>
                                <Col md={4} className='justify-content-center d-flex'>
                                    <div className="header_search_filter_section">
                                        <h6>Select Your Destination</h6>
                                        <div className="header_search_filter_section_input">
                                            All destinations
                                            <div><FaMapMarkerAlt /></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4} className='justify-content-center d-flex'>
                                    <div className="header_search_filter_section">
                                        <h6>Select Your Date</h6>
                                        <div className="header_search_filter_section_input">
                                            mm-dd-yyyy
                                            <div><FaCalendarAlt /></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4} className='justify-content-center d-flex'>
                                    <div className="header_search_filter_section">
                                        <div className="header_search_filter_price d-flex justify-content-between">
                                            <h6>Max Price:</h6>
                                            <h6 className="header_search_filter_price_current">5000 $</h6>
                                        </div>

                                        <input type="range" className='mt-3' />

                                        <div className="header_search_filter_promotion d-flex mt-3">
                                            <input type="checkbox" />
                                            <h6>See only promotions</h6>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <div className="header_search_more_filter">
                                <FaFilter /> MORE FILTER
                            </div>
                        </div>

                        <div className="header_options">
                            <div className="header_options_section">
                                <span>PRICE <FaAngleDown /></span>
                                <span>NAME <FaAngleDown /></span>
                            </div>
                            <div className="header_options_section">
                                <span><FaListUl /></span>
                                <span><FaEllipsisH /></span>
                            </div>
                        </div>
                    </div>
                </div >}


            <LeftMenu closeLeftMenu={closeLeftMenu} leftMenu={leftMenu} />
        </>

    )
}

export default Header;