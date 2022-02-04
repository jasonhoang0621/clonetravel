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

class Calender {
    static currentYear = new Date(Date.now()).getFullYear()
    static currentMonth = new Date(Date.now()).getMonth() + 1
    static currentDay = new Date(Date.now()).getDate()

    static isLeapYear(year) {
        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    }

    static getFebruary(year) {
        return this.isLeapYear(year) ? 29 : 28
    }

    static firstPos(month, year) {
        return new Date(month, year, 1).getDay()
    }

    static months = ['January', 'February', "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    static displayTable(month, year) {
        let days = [31, this.getFebruary(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        let element = []
        let dayCount = 0

        for (let i = 0; i <= days[month - 1] + this.firstPos(month, year); i) {
            let temp = []
            for (let j = 0; j < 7; j++) {
                if (i < this.firstPos(month, year) || dayCount > days[month - 1] - 1) {
                    temp.push('')
                    i++
                } else {
                    temp.push(++dayCount)
                    i++
                }
            }
            element.push(temp)
        }
        return element
    }
}

function Header(props) {
    const [leftMenu, setLeftMenu] = useState(false)

    const openLeftMenu = () => setLeftMenu(true)
    const closeLeftMenu = () => setLeftMenu(false)

    //calender
    const [isShowCalender, setIsShowCalender] = useState(false)
    const [day, setDay] = useState(Calender.currentDay)
    const [month, setMonth] = useState(Calender.currentMonth)
    const [year, setYear] = useState(Calender.currentYear)

    const display = Calender.displayTable(month, year)

    const handlePrevMonth = () => {
        if (month === 1) {
            setYear(year - 1)
            setMonth(12)
            return
        } else setMonth(month - 1)
    }
    const handleNextMonth = () => {
        if (month === 12) {
            setYear(year + 1)
            setMonth(1)
            return;
        } else setMonth(month + 1)
    }

    const handleChooseDay = event => {
        setDay(event.target.textContent)
        setIsShowCalender(false)
    }


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
                                            <div className='header_search_filter_section_input_icon'><FaMapMarkerAlt /></div>
                                            <select>
                                                <option value="">All destination</option>
                                                <option value="">Europe</option>
                                                <option value="">Italy</option>
                                                <option value="">Netherlands</option>
                                                <option value="">Asia</option>
                                                <option value="">Thailand</option>
                                                <option value="">United State</option>
                                                <option value="">Oceania</option>
                                            </select>
                                        </div>

                                    </div>
                                </Col>
                                <Col md={4} className='justify-content-center d-flex'>
                                    <div className="header_search_filter_section">
                                        <h6>Select Your Date</h6>
                                        <div className='header_search_filter_section_date'>
                                            <div className='header_search_filter_section_date_input' onClick={() => setIsShowCalender(!isShowCalender)}>
                                                {`${day}-${month}-${year}`}
                                                <div className='header_search_filter_section_input_icon'><FaCalendarAlt /></div>
                                            </div>

                                            {isShowCalender &&
                                                <div className="header_search_filter_section_date_calender">
                                                    <div className="header_search_filter_section_date_calender_top">
                                                        <button onClick={handlePrevMonth}>PREV</button>
                                                        <div className='header_search_filter_section_date_calender_top_header'>{Calender.months[month - 1]} {year}</div>
                                                        <button onClick={handleNextMonth}>NEXT</button>
                                                    </div>
                                                    <table className="header_search_filter_section_date_calender_table">
                                                        <thead>
                                                            <tr>
                                                                <th>Sun</th>
                                                                <th>Mon</th>
                                                                <th>Tue</th>
                                                                <th>Wed</th>
                                                                <th>Thu</th>
                                                                <th>Fri</th>
                                                                <th>Sat</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {display.map((item, index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        {item.map((it, i) => {
                                                                            if (it < Calender.currentDay && month === Calender.currentMonth && year === Calender.currentYear) return <th key={i} className='calender_passed_days' onClick={event => handleChooseDay(event)}>{it}</th>
                                                                            if (it === Calender.currentDay && month === Calender.currentMonth && year === Calender.currentYear) return <th key={i} className='calender_current_day' onClick={event => handleChooseDay(event)}>{it}</th>
                                                                            else return <th key={i} onClick={event => handleChooseDay(event)}>{it}</th>

                                                                        })}
                                                                    </tr>
                                                                )
                                                            })}
                                                        </tbody>
                                                    </table>
                                                </div>}
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
                                <span className='header_options_section_item'>
                                    PRICE <FaAngleDown />
                                    <div className="header_option_filter">
                                        <ul>
                                            <li>LOWEST PRICE</li>
                                            <li>HIGHT PRICE</li>
                                        </ul>
                                    </div>
                                </span>
                                <span className='header_options_section_item'>
                                    NAME <FaAngleDown />
                                    <div className="header_option_filter">
                                        <ul>
                                            <li>DESC</li>
                                            <li>ASC</li>
                                        </ul>
                                    </div>
                                </span>
                            </div>
                            <div className="header_options_section">
                                <span className={`header_options_section_item ${!props.isList && 'unselected_item'}`} onClick={props.handleSetDisplayList}><FaListUl /></span>
                                <span className={`header_options_section_item ${props.isList && 'unselected_item'}`} onClick={props.handleSetDisplayList2}><FaEllipsisH /></span>
                            </div>
                        </div>
                    </div>
                </div >}


            <LeftMenu closeLeftMenu={closeLeftMenu} leftMenu={leftMenu} />
        </>

    )
}

export default Header;