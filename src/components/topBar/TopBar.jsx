import './TopBar.scss'
import { FaBars, FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function TopBar(props) {
    return (
        <div className="topbar_container">
            <div className="topbar_logo">
                <img className='topbar_logo_img' src="/assets/logo/logo.png" alt="Top bar logo" />
            </div>

            <div className="topbar_content">
                <ul className="topbar_content_list">
                    <li className="topbar_content_item">
                        <Link to='/'>HOME</Link>
                    </li>
                    <li className="topbar_content_item">
                        <Link to='/search-1'>PACKAGES</Link>
                        <ul className='topbar_item_root_list'>
                            <li><Link to='/search-1'>Search 1 <span className='topbar_item_root_badge'>HOT</span></Link></li>
                            <li><Link to='/search-1'>Search 2</Link></li>
                            <li>
                                <Link to='tour-packages'>Tour Package <span><FaAngleRight /></span></Link>
                                <ul className='topbar_item_children_list'>
                                    <li><Link to='/tour-packages/carousel'>Carousel <span>BEST</span></Link></li>
                                    <li><Link to='/tour-packages/custom-map'>Custom Map</Link></li>
                                    <li><Link to='/tour-packages/panorama'>360° Panorama</Link></li>
                                    <li><Link to='/default'>Default</Link></li>
                                </ul>
                            </li>
                            <li><Link to='/destination'>Destination</Link></li>
                            <li><Link to='/typology'>Typology</Link></li>
                        </ul>
                    </li>
                    <li className="topbar_content_item">
                        <Link to='/shop'>SHOP</Link>
                        <ul className='topbar_item_root_list'>
                            <li><Link to='/shop'>Archive</Link></li>
                            <li><Link to='/single-product'>Single Product</Link></li>
                            <li><Link to='/cart'>Cart</Link></li>
                            <li><Link to='/checkout'>Checkout</Link></li>
                        </ul>
                    </li>
                    <li className="topbar_content_item">
                        <Link to='/about-us'>ABOUT US</Link>
                        <ul className='topbar_item_root_list'>
                            <li><Link to='/about-us'>About us <span className="topbar_item_root_badge">NEW</span></Link></li>
                            <li><Link to='/about-us-2'>About us 2</Link></li>
                            <li><Link to='/about-us-3'>About us 3</Link></li>
                        </ul>
                    </li>
                    <li className="topbar_content_item">
                        <Link to='/services'>PAGES</Link>
                        <ul className="topbar_item_root_list">
                            <li><Link to='/services'>Services</Link></li>
                            <li><Link to='/agency-tours'>Agency Tours</Link></li>
                            <li><Link to='/testimonials'>Testimonials</Link></li>
                            <li><Link to='/prices'>Prices</Link></li>
                            <li><Link to='/promotions'>Promotions</Link></li>
                            <li><Link to='/faq'>Faq</Link></li>
                            <li><Link to='/coming-soon'>Coming Soon</Link></li>
                            <li>
                                <Link to='/about-us'>About us <span><FaAngleRight /></span></Link>
                                <ul className="topbar_item_children_list">
                                    <li><Link to='/about-us'>About us</Link></li>
                                    <li><Link to='/about-us-2'>About us 2</Link></li>
                                    <li><Link to='/about-us-3'>About us 3</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to='/contact'>Contact <span><FaAngleRight /></span></Link>
                                <ul className="topbar_item_children_list">
                                    <li><Link to='/contact'>Contact 1</Link></li>
                                    <li><Link to='/contact-2'>Contact 2</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="topbar_content_item">
                        <Link to='/news'>NEWS</Link>
                        <ul className="topbar_item_root_list">
                            <li><Link to='/news'>Archive</Link></li>
                            <li>
                                <Link to='/news/full-width'>Single Post <span><FaAngleRight /></span></Link>
                                <ul className="topbar_item_children_list">
                                    <li><Link to='/news/full-width'>Full width</Link></li>
                                    <li><Link to='/news/right-sidebar'>Right Sidebar</Link></li>
                                    <li><Link to='/news/left-sidebar'>Left Sidebar</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="topbar_content_item">
                        <Link to='/contact'>CONTACT</Link>
                        <ul className="topbar_item_root_list">
                            <li><Link to='/contact'>Contact 1</Link></li>
                            <li><Link to='/contact-2'>Contact 2</Link></li>
                        </ul>
                    </li>
                    <li className="topbar_content_item topbar_content_book_now">
                        <Link to='/book'>BOOK NOW</Link>
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