import './TopBar.scss'
import { FaBars } from 'react-icons/fa'

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
                            <li>Search 1 <span>HOT</span></li>
                            <li>Search 2</li>
                            <li>
                                Tour Package
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
                    </li>
                    <li className="topbar_content_item">
                        <a href="/#">ABOUT US</a>
                    </li>
                    <li className="topbar_content_item">
                        <a href="/#">PAGES</a>
                    </li>
                    <li className="topbar_content_item">
                        <a href="/#">NEWS</a>
                    </li>
                    <li className="topbar_content_item">
                        <a href="/#">CONTACT</a>
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