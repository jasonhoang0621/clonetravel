import './Destination.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

function Desination(props) {
    return (
        <div className="destination_card">
            <img src={props.proposal.image} alt="" />
            <div className="destination_description">
                <div className='destination_label'>{props.proposal.name}</div>
                <div className='destination_package'>{props.proposal.packages.length} PACKAGES</div>
            </div>

            <div className="destination_card_hover">
                <div className="destination_card_hover_container">
                    <div className="destination_package">
                        <h5 className='mb-3'>Packages</h5>
                        <ul className='mb-4'>
                            {props.proposal.packages.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                        <button>VIEW DESTINATION</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Desination;