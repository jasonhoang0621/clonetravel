import './Carousel.scss'
import Header from '../../components/header/Header';
import { Row, Col } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { FaCheck, FaTimes } from 'react-icons/fa'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from 'react';

function Carousel() {
    const [nav, setNav] = useState(0)

    return (
        <div className="carousel_container">
            <Header carousel={true} />

            <Row className="carousel_short_info ms-md-5 me-md-5 ps-md-5 pe-md-5 m-0">
                <Col md={8} className='d-flex align-items-center flex-fill'>
                    <Row className='flex-fill'>
                        <Col md={4} className='mt-2 mt-md-0'>
                            <div className="carousel_short_info_container">
                                <div className="carousel_short_info_icon">
                                    <img src="/assets/icon/icon-typologies-greydark.png" alt="icon" />
                                </div>
                                <div className="carousel_short_info_word">
                                    <h6>TYPOLOGIES</h6>
                                    <h6 className='carousel_short_info_subword'>Sport <span className='carousel_short_info_word_number'>+2</span></h6>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className='mt-4 mt-md-0'>
                            <div className="carousel_short_info_container">
                                <div className="carousel_short_info_icon">
                                    <img src="/assets/icon/icon-battery-greydark.png" alt="icon" />
                                </div>
                                <div className="carousel_short_info_word">
                                    <h6>DIFFICULTY</h6>
                                    <h6 className='carousel_short_info_subword'>High</h6>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className='mt-4 mt-md-0'>
                            <div className="carousel_short_info_container">
                                <div className="carousel_short_info_icon">
                                    <img src="/assets/icon/icon-minage-greydark.png" alt="icon" />
                                </div>
                                <div className="carousel_short_info_word">
                                    <h6>MIN. AGE</h6>
                                    <h6 className='carousel_short_info_subword'>10 Years</h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={4} className='d-flex align-items-center mt-4 mt-md-0 p-0'>
                    <h1 className='carousel_short_info_price flex-fill text-center mb-0'>400 $</h1>
                </Col>
            </Row>

            <div className="carousel_slider_container ms-md-5 me-md-5 ps-md-5 pe-md-5 m-0 p-0">
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={0}
                    centeredSlides={true}
                    grabCursor={true}
                    loop={true}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Pagination]}
                    className='carousel_slider'
                >
                    <SwiperSlide className='carousel_slider_slide'>
                        {({ isActive }) => (
                            isActive ? <>
                                <img className='carousel_slider_image' src="/assets/image/slide-pk-1.jpg" alt="carousel" />
                                <div className="carousel_slider_slide_description">
                                    <h1>Amazing tour</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut venenatis lorem. Nunc sodales interdum rhoncus. Nulla a leo finibus, ullamcorper lorem vel, scelerisque massa</p>
                                </div>
                            </>
                                :
                                <img className='carousel_slider_image' src="/assets/image/slide-pk-1.jpg" alt="carousel" />
                        )}
                    </SwiperSlide>
                    <SwiperSlide className='carousel_slider_slide'>
                        {({ isActive }) => (
                            isActive ? <>
                                <img className='carousel_slider_image' src="/assets/image/slide-pk-2.jpg" alt="carousel" />
                                <div className="carousel_slider_slide_description">
                                    <h1>Amazing tour</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut venenatis lorem. Nunc sodales interdum rhoncus. Nulla a leo finibus, ullamcorper lorem vel, scelerisque massa</p>
                                </div>
                            </>
                                :
                                <img className='carousel_slider_image' src="/assets/image/slide-pk-2.jpg" alt="carousel" />
                        )}
                    </SwiperSlide>
                    <SwiperSlide className='carousel_slider_slide'>
                        {({ isActive }) => (
                            isActive ? <>
                                <img className='carousel_slider_image' src="/assets/image/slide-pk-3.jpg" alt="carousel" />
                                <div className="carousel_slider_slide_description">
                                    <h1>Amazing tour</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut venenatis lorem. Nunc sodales interdum rhoncus. Nulla a leo finibus, ullamcorper lorem vel, scelerisque massa</p>
                                </div>
                            </>
                                :
                                <img className='carousel_slider_image' src="/assets/image/slide-pk-3.jpg" alt="carousel" />
                        )}
                    </SwiperSlide>
                    <SwiperSlide className='carousel_slider_slide'>
                        {({ isActive }) => (
                            isActive ? <>
                                <img className='carousel_slider_image' src="/assets/image/slide-pk-4.jpg" alt="carousel" />
                                <div className="carousel_slider_slide_description">
                                    <h1>Amazing tour</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut venenatis lorem. Nunc sodales interdum rhoncus. Nulla a leo finibus, ullamcorper lorem vel, scelerisque massa</p>
                                </div>
                            </>
                                :
                                <img className='carousel_slider_image' src="/assets/image/slide-pk-4.jpg" alt="carousel" />
                        )}
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="carousel_info_nav m-md-5 ps-md-5 pe-md-5 m-0">
                <Row className='text-center mb-3'>
                    <Col md={3}>
                        <div className={`carousel_info_nav_item ${nav === 0 && 'active'}`} onClick={() => setNav(0)}>
                            DESCRIPTION
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={`carousel_info_nav_item ${nav === 1 && 'active'}`} onClick={() => setNav(1)}>
                            MAP
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={`carousel_info_nav_item ${nav === 2 && 'active'}`} onClick={() => setNav(2)}>
                            PHOTOS
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={`carousel_info_nav_item ${nav === 3 && 'active'}`} onClick={() => setNav(3)}>
                            PROGRAM
                        </div>
                    </Col>
                </Row>

                {nav === 0 &&
                    <div className="carousel_nav_description">
                        <h3 >Amazing Experience</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut venenatis lorem. Nunc sodales interdum rhoncus. Nulla a leo finibus, ullamcorper lorem vel, scelerisque massa. Vivamus leo dui, interdum non fermentum eget, laoreet ac lorem. Aliquam a ultricies nisl. Nulla consequat lobortis urna sed cursus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut venenatis lorem. Nunc sodales interdum rhoncus. Nulla a leo finibus, ullamcorper lorem vel, scelerisque massa. Vivamus leo dui, interdum non fermentum eget, laoreet ac lorem. Aliquam a ultricies nisl. Nulla consequat lobortis urna sed cursus.</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Entrance to the museums</td>
                                    <td>50% discount on all admissions</td>
                                </tr>
                                <tr>
                                    <td>Travel with children and pets</td>
                                    <td>Possibility to rent the stroller</td>
                                </tr>
                                <tr>
                                    <td>Travel by bus, car and minivan</td>
                                    <td>Air conditioning guaranteed</td>
                                </tr>
                                <tr>
                                    <td>Package specifications</td>
                                    <td>
                                        <div><span className='carousel_nav_description_icon check'><FaCheck /></span>Travel cancellation insurance</div>
                                        <div><span className='carousel_nav_description_icon check'><FaCheck /></span>Breakfast and dinner included</div>
                                        <div><span className='carousel_nav_description_icon check'><FaCheck /></span>Health care included</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Services NOT included</td>
                                    <td>
                                        <div><span className='carousel_nav_description_icon'><FaTimes /></span>Lunch not included in the package</div>
                                        <div><span className='carousel_nav_description_icon'><FaTimes /></span>Baggage protection insurance</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>}

                {nav === 1 &&
                    <div className='carousel_nav_map'>
                        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=19kxW9xBLlc3_i5MiK6XhL507sFY_vGtj&ehbc=2E312F" className='carousel_nav_map_google' title='google_map'></iframe>
                    </div>}

                {nav === 2 &&
                    <div className="carousel_nav_photos">
                        <Row>
                            <Col md={8} className='d-flex flex-column justify-content-betwee'>
                                <Row className='h-100'>
                                    <Col md={12}>
                                        <Row>
                                            <Col md={6}>
                                                <img src="/assets/image/pack-slide-4.jpg" alt="carousel" className='w-100' />
                                            </Col>
                                            <Col md={6}>
                                                <img src="/assets/image/pack-slide-1.jpg" alt="carousel" className='w-100' />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={12}>
                                        <img src="/assets/image/pk-sm-1.jpg" alt="carousel" className='w-100 h-100' />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={4}>
                                <img src="/assets/image/pk-sm-2.jpg" alt="carousel" className='w-100 h-100' />
                            </Col>
                        </Row>
                    </div>}


            </div>


        </div>
    )
}

export default Carousel;
