import './Package.scss'

function Package(props) {
    return (
        <div className="package-item">
            <div className="package_item_image">
                <img className='package_image' src={props.packages.image} alt="background" />
                <div className="package_image_background_icon" style={{ background: props.packages.color }}>
                    <img className="package_image_icon" src={props.packages.icon} alt="icon" />
                </div>
            </div>
            <div className="package_item_content">
                <div className="package_item_header">
                    <h5>{props.packages.name}</h5>
                    <div className="package_item_location">
                        <img src="./assets/icon/icon-pin-grey.png" alt="location" />
                        <h6>{props.packages.location}</h6>
                    </div>
                </div>
                <div className="package_separator"></div>
                <div className="package_item_price_info">
                    <div className="package_item_price_category">
                        <h6>{props.packages.category.first}</h6>
                        <h6>{props.packages.category.second} <span style={{ background: props.packages.color }}>+ 1</span></h6>
                    </div>
                    <div className="package_item_price">
                        <h4>{props.packages.discount && <span>{props.packages.discount}</span>} {props.packages.price} $</h4>
                    </div>
                </div>
                <div className="package_separator"></div>
                <div className="package_item_description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque.</p>
                </div>
                <div className="package_item_link_detail">
                    <a href="/#" style={{ background: props.packages.color }}>DETAILS</a>
                </div>
            </div>
        </div>
    )
}

export default Package;
