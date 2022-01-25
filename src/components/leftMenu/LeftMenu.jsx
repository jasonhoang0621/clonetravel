import './LeftMenu.scss'
import { FaRegTimesCircle } from 'react-icons/fa'

function LeftMenu(props) {
    const suggestion = [
        {
            name: 'Berlin',
            location: 'Europe',
            price: 700,
            image: 'package-1-150x150.jpg',
            color: 'linear-gradient(to right, #ffd205 0%, #ff9b05 100%)'
        },
        {
            name: 'Hong Kong',
            location: 'Asia',
            price: 500,
            image: 'package-6-150x150.jpg',
            color: 'linear-gradient(to right, #f76570 0%, #f78d65 100%)'
        },
        {
            name: 'San Francisco',
            location: 'United States',
            price: 400,
            image: 'package-2-150x150.jpg',
            color: 'linear-gradient(to right, #ba71da 0%, #da717b 100%)'
        },
    ]
    const lastAccess = [
        {
            name: 'Tuscany',
            location: 'Italy',
            price: 730,
            image: 'package-5-150x150.jpg',
            color: 'linear-gradient(to right, #1bbc9b 0%, #1bbc63 100%)'
        },
        {
            name: 'Amsterdam',
            location: 'Netherlands',
            price: 1500,
            image: 'package-4-150x150.jpg',
            color: 'linear-gradient(to right, #f3a46b 0%, #f3c96b 100%)'
        },
        {
            name: 'PhuKet',
            location: 'Thailand',
            price: 1200,
            image: 'package-3-150x150.jpg',
            color: 'linear-gradient(to right, #14b9d5 0%, #14d5b1 100%)'
        },
    ]

    return (
        <>
            {props.leftMenu && <div className="left_menu_overlay" onClick={props.closeLeftMenu}></div>}

            <div className={`left_menu_container ${props.leftMenu && 'left_menu_show'}`}>
                <div className="left_menu_close">
                    <FaRegTimesCircle onClick={props.closeLeftMenu} className='left_menu_close_icon' />
                </div>
                <div className="left_menu_best_package">
                    <div className="best_package_header">
                        <h6>BEST</h6>
                        <h4>PACKAGES</h4>
                    </div>
                    <div className="left_menu_suggestion">
                        {suggestion.map((item, index) => (
                            <div className="left_menu_suggestion_card" key={index}>
                                <div className="left_menu_suggestion_card_image">
                                    <img src={`./assets/image/${item.image}`} alt="packageImage" />
                                </div>
                                <div className="left_menu_suggestion_card_info">
                                    <h5>{item.name}</h5>
                                    <div className="left_menu_suggestion_card_location">
                                        <img src="./assets/icon/icon-pin-grey.png" alt="location" />
                                        <h6>{item.location}</h6>
                                    </div>
                                    <a href="/#" style={{ background: item.color }}>FROM {item.price} $</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="left_menu_last_access">
                    <div className="last_access_header">
                        <h6>LAST</h6>
                        <h4>MINUTES</h4>
                    </div>
                    <div className="left_menu_suggestion">
                        {lastAccess.map((item, index) => (
                            <div className="left_menu_suggestion_card" key={index}>
                                <div className="left_menu_suggestion_card_image">
                                    <img src={`./assets/image/${item.image}`} alt="packageImage" />
                                </div>
                                <div className="left_menu_suggestion_card_info">
                                    <h5>{item.name}</h5>
                                    <div className="left_menu_suggestion_card_location">
                                        <img src="./assets/icon/icon-pin-grey.png" alt="location" />
                                        <h6>{item.location}</h6>
                                    </div>
                                    <a href="/#" style={{ background: item.color }}>FROM {item.price} $</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >

            <div className={`left_menu_mobile_container ${props.leftMenu && 'left_menu_show'}`}>
                <div className="left_menu_close">
                    <FaRegTimesCircle onClick={props.closeLeftMenu} className='left_menu_close_icon' />
                </div>
                <div className="left_menu_mobile_list">
                    <ul>
                        <li><a href="/#">HOME</a></li>
                        <li><a href="/#">PACKAGES</a></li>
                        <li><a href="/#">SHOP</a></li>
                        <li><a href="/#">ABOUT US</a></li>
                        <li><a href="/#">PAGES</a></li>
                        <li><a href="/#">NEWS</a></li>
                        <li><a href="/#">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default LeftMenu;
