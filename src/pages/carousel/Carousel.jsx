import './Carousel.scss'
import Header from '../../components/header/Header';
import { Row, Col } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper'
import { FaCheck, FaTimes, FaPlusSquare } from 'react-icons/fa'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from 'react';


function Carousel() {
    const [nav, setNav] = useState(0)
    const [photoSlide, setPhotoSlide] = useState(false)
    const [initSlide, setInitSlide] = useState(0)
    const [programPopUp, setProgramPopUp] = useState(Array(5).fill(false))

    const changeStatePopUp = (index) => {
        let newState = [...programPopUp]
        newState.splice(index, 1, !newState[index])
        setProgramPopUp(newState)
    }

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
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    modules={[Pagination, Autoplay]}
                    className='carousel_slider'
                >
                    <SwiperSlide className='carousel_slider_slide'>
                        {({ isActive }) => (
                            isActive ? <>
                                <img className={`carousel_slider_image ${isActive && 'swiper_zoom_in'}`} src="/assets/image/slide-pk-1.jpg" alt="carousel" />
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
                                <img className={`carousel_slider_image ${isActive && 'swiper_zoom_in'}`} src="/assets/image/slide-pk-2.jpg" alt="carousel" />
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
                                <img className={`carousel_slider_image ${isActive && 'swiper_zoom_in'}`} src="/assets/image/slide-pk-3.jpg" alt="carousel" />
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
                                <img className={`carousel_slider_image ${isActive && 'swiper_zoom_in'}`} src="/assets/image/slide-pk-4.jpg" alt="carousel" />
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

                {nav === 2 && !photoSlide &&
                    <div className="carousel_nav_photos">
                        <Row>
                            <Col md={8} className='d-flex flex-column justify-content-betwee'>
                                <Row className='h-100'>
                                    <Col md={12}>
                                        <Row>
                                            <Col md={6}>
                                                <img src="/assets/image/pack-slide-4.jpg" alt="carousel" className='carousel_nav_photos_image' onClick={() => { setPhotoSlide(true); setInitSlide(1) }} />
                                            </Col>
                                            <Col md={6}>
                                                <img src="/assets/image/pack-slide-1.jpg" alt="carousel" className='carousel_nav_photos_image' onClick={() => { setPhotoSlide(true); setInitSlide(0) }} />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={12}>
                                        <img src="/assets/image/pk-sm-1.jpg" alt="carousel" className='carousel_nav_photos_image h-100' onClick={() => { setPhotoSlide(true); setInitSlide(2) }} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={4}>
                                <img src="/assets/image/pk-sm-2.jpg" alt="carousel" className='carousel_nav_photos_image h-100' onClick={() => { setPhotoSlide(true); setInitSlide(3) }} />
                            </Col>
                        </Row>
                    </div>}

                {nav === 2 && photoSlide &&
                    <div className="carousel_nav_photos">
                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={0}
                            centeredSlides={true}
                            grabCursor={true}
                            loop={true}
                            navigation={true}
                            modules={[Navigation]}
                            initialSlide={initSlide}
                            className='carousel_nav_photo_slider'
                        >
                            <SwiperSlide className='carousel_nav_photos_slider_slide'>
                                {({ isActive }) => (
                                    isActive && <>
                                        <img className='carousel_nav_photo_slider_image' src={`/assets/image/pack-slide-1.jpg`} alt="" />
                                        <FaTimes className='carousel_nav_photo_slider_close' onClick={() => setPhotoSlide(false)} />
                                        <div className="carousel_nav_photo_slider_description">
                                            <h1>Project City Photography</h1>
                                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                                            <a href='/#'>VIEW MORE</a>
                                        </div></>
                                )}
                            </SwiperSlide>
                            <SwiperSlide className='carousel_nav_photos_slider_slide'>
                                {({ isActive }) => (
                                    isActive && <>
                                        <img className='carousel_nav_photo_slider_image' src={`/assets/image/pack-slide-4.jpg`} alt="" />
                                        <FaTimes className='carousel_nav_photo_slider_close' onClick={() => setPhotoSlide(false)} />
                                        <div className="carousel_nav_photo_slider_description">
                                            <h1>Amazing Landscapes</h1>
                                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                                            <a href='/#'>VIEW MORE</a>
                                        </div></>
                                )}
                            </SwiperSlide>
                            <SwiperSlide className='carousel_nav_photos_slider_slide'>
                                {({ isActive }) => (
                                    isActive && <><img className='carousel_nav_photo_slider_image' src={`/assets/image/pk-sm-1.jpg`} alt="" />
                                        <FaTimes className='carousel_nav_photo_slider_close' onClick={() => setPhotoSlide(false)} />
                                        <div className="carousel_nav_photo_slider_description">
                                            <h1>Travel Experience</h1>
                                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                                            <a href='/#'>VIEW MORE</a>
                                        </div></>
                                )}
                            </SwiperSlide>
                            <SwiperSlide className='carousel_nav_photos_slider_slide'>
                                {({ isActive }) => (
                                    isActive && <>
                                        <img className='carousel_nav_photo_slider_image' src={`/assets/image/pk-sm-2.jpg`} alt="" />
                                        <FaTimes className='carousel_nav_photo_slider_close' onClick={() => setPhotoSlide(false)} />
                                        <div className="carousel_nav_photo_slider_description">
                                            <h1>Project Natural Exploration</h1>
                                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                                            <a href='/#'>VIEW MORE</a>
                                        </div>
                                    </>
                                )}
                            </SwiperSlide>
                        </Swiper>
                    </div>}

                {nav === 3 &&
                    <div className="carousel_nav_program">
                        <h3>Day by Day</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut venenatis lorem. Nunc sodales interdum rhoncus. Nulla a leo finibus, ullamcorper lorem vel, scelerisque massa. Vivamus leo dui, interdum non fermentum eget, laoreet ac lorem. Aliquam a ultricies nisl. Nulla consequat lobortis urna sed cursus. ipsum dolor sit amet, consectetur adipiscing elit consectef lorem vel, scelerisque massa. Vivamus leo dui, interdum non.</p>

                        <div className="carousel_nav_program_list">
                            <div className="carousel_nav_program_item" >
                                <div className="d-flex">
                                    <FaPlusSquare className='carousel_nav_program_item_icon' onClick={() => changeStatePopUp(0)} />
                                    <span>DAY 1</span> - Departure at the airport and arrival at the hotel
                                </div>
                                {programPopUp[0] &&
                                    <div className="carousel_nav_program_item_popup">
                                        Lorem commodo lectus at sollicitudin elementum. Sed dolor turpis, condimentum sit amet maximus sit amet, rhoncus non turpis.
                                    </div>
                                }

                            </div>
                            <div className="carousel_nav_program_item">
                                <div className="d-flex">
                                    <FaPlusSquare className='carousel_nav_program_item_icon' onClick={() => changeStatePopUp(1)} />
                                    <span>DAY 2</span> - Visit the main museums and lunch included
                                </div>
                                {programPopUp[1] &&
                                    <div className="carousel_nav_program_item_popup">
                                        Lorem commodo lectus at sollicitudin elementum. Sed dolor turpis, condimentum sit amet maximus sit amet, rhoncus non turpis.
                                    </div>
                                }
                            </div>
                            <div className="carousel_nav_program_item">
                                <div className="d-flex">
                                    <FaPlusSquare className='carousel_nav_program_item_icon' onClick={() => changeStatePopUp(2)} />
                                    <span>DAY 3</span> - Excursion in the natural oasis and picnic
                                </div>
                                {programPopUp[2] &&
                                    <div className="carousel_nav_program_item_popup">
                                        Lorem commodo lectus at sollicitudin elementum. Sed dolor turpis, condimentum sit amet maximus sit amet, rhoncus non turpis.
                                    </div>
                                }
                            </div>
                            <div className="carousel_nav_program_item">
                                <div className="d-flex">
                                    <FaPlusSquare className='carousel_nav_program_item_icon' onClick={() => changeStatePopUp(3)} />
                                    <span>DAY 4</span> - Excursion in the natural oasis and picnic
                                </div>
                                {programPopUp[3] &&
                                    <div className="carousel_nav_program_item_popup">
                                        Lorem commodo lectus at sollicitudin elementum. Sed dolor turpis, condimentum sit amet maximus sit amet, rhoncus non turpis.
                                    </div>
                                }
                            </div>
                            <div className="carousel_nav_program_item">
                                <div className="d-flex">
                                    <FaPlusSquare className='carousel_nav_program_item_icon' onClick={() => changeStatePopUp(4)} />
                                    <span>DAY 5</span> - Lorem ipsum dolor sit amet, consectetur adipiscing
                                </div>
                                {programPopUp[4] &&
                                    <div className="carousel_nav_program_item_popup">
                                        Lorem commodo lectus at sollicitudin elementum. Sed dolor turpis, condimentum sit amet maximus sit amet, rhoncus non turpis.
                                    </div>
                                }
                            </div>
                        </div>
                    </div>}
            </div>
        </div >
    )
}

export default Carousel;
