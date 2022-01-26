import './TopBar.scss'
import { FaBars, FaAngleRight } from 'react-icons/fa'

function TopBar(props) {
    return (
        <div className="topbar_container">
            <div className="topbar_logo">
                <img className='topbar_logo_img' src="./assets/logo/logo.png" alt="Top bar logo" />
            </div>

            <div className="topbar_content">
                <ul className="topbar_content_list">
                    <li className="topbar_content_item">
                        <a href="/#">HOME</a>
                    </li>
                    <li className="topbar_content_item">
                        <a href="/#">PACKAGES</a>
                        <ul className='topbar_item_root_list'>
                            <li>Search 1 <span className='topbar_item_root_badge'>HOT</span></li>
                            <li>Search 2</li>
                            <li>
                                Tour Package <span><FaAngleRight /></span>
                                <ul className='topbar_item_children_list'>
                                    <li>Carousel <span>BEST</span></li>
                                    <li>Custom Map</li>
                                    <li>360° Panorama</li>
                                    <li>Default</li>
                                </ul>
                            </li>
                            <li>Destination</li>
                            <li>Typology</li>
                        </ul>
                    </li>
                    <li className="topbar_content_item">
                        <a href="/#">SHOP</a>
                        <ul className='topbar_item_root_list'>
                            <li>Archive</li>
                            <li>Single Product</li>
                            <li>Cart</li>
                            <li>Checkout</li>
                        </ul>
                    </li>
                    <li className="topbar_content_item">
                        <a href="/#">ABOUT US</a>
                        <ul className='topbar_item_root_list'>
                            <li>About us <span className="topbar_item_root_badge">NEW</span></li>
                            <li>About us 1</li>
                            <li>About us 2</li>
                        </ul>
                    </li>
                    <li className="topbar_content_item">
                        <a href="/#">PAGES</a>
                        <ul className="topbar_item_root_list">
                            <li>Services</li>
                            <li>Agency Tours</li>
                            <li>Testimonials</li>
                            <li>Prices</li>
                            <li>Promotions</li>
                            <li>Faq</li>
                            <li>Coming Soon</li>
                            <li>
                                About us <span><FaAngleRight /></span>
                                <ul className="topbar_item_children_list">
                                    <li>About us</li>
                                    <li>About us 1</li>
                                    <li>About us 2</li>
                                </ul>
                            </li>
                            <li>
                                Contact <span><FaAngleRight /></span>
                                <ul className="topbar_item_children_list">
                                    <li>Contact 1</li>
                                    <li>Contact 2</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="topbar_content_item">
                        <a href="/#">NEWS</a>
                        <ul className="topbar_item_root_list">
                            <li>Archive</li>
                            <li>
                                Single Post <span><FaAngleRight /></span>
                                <ul className="topbar_item_children_list">
                                    <li>Full width</li>
                                    <li>Right Sidebar</li>
                                    <li>Left Sidebar</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="topbar_content_item">
                        <a href="/#">CONTACT</a>
                        <ul className="topbar_item_root_list">
                            <li>Contact 1</li>
                            <li>Contact 2</li>
                        </ul>
                    </li>
                    <li className="topbar_content_item topbar_content_book_now">
                        <a href="/#">BOOK NOW</a>
                    </li>
                </ul>
            </div>

            <div className="topbar_menu" >
                <FaBars onClick={props.openLeftMenu} />
            </div>
        </div>
    )
}

export default TopBar;