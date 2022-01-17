import './TopBar.scss'
import { FaBars } from 'react-icons/fa'

function TopBar() {
    return (
        <div className="topbar_containter">
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
                    <li className="topbar_content_item">
                        <a href="/#">BOOK NOW</a>
                    </li>
                </ul>
            </div>

            <div className="topbar_menu">
                <FaBars />
            </div>
        </div>
    )
}

export default TopBar;