import './Home.scss'

import Destination from "../../destination/Destination";
import HorizontalBreak from "../../components/horizontalBreak/HorizontalBreak";
import Article from "../../components/article/Article";
import Package from "../../components/package/Package";

import { Col, Row } from 'react-bootstrap'
import Header from '../../components/header/Header';

function Home() {
    const proposal = [
        {
            image: './assets/image/destination-9.jpg',
            name: 'Europe',
            packages: ['Berlin', 'Amsterdam', 'Tuscany']
        },
        {
            image: './assets/image/destination-5-720x720.jpg',
            name: 'Thailand',
            packages: ['Phu Ket']
        },
        {
            image: './assets/image/destination-8.jpg',
            name: 'Asia',
            packages: ['Hong Kong', 'Phu Ket']
        },
        {
            image: './assets/image/destination-10.jpg',
            name: 'Italy',
            packages: ['Tuscany']
        },
        {
            image: './assets/image/destination-11.jpg',
            name: 'Netherlands',
            packages: ['Amsterdam']
        },
        {
            image: './assets/image/destination-1-1-720x720.jpg',
            name: 'United State',
            packages: ['San Francisco']
        },
    ]

    const yellowGradientColor = 'linear-gradient(to right, #ffd205 0%, #ff9b05 100%)'
    const redGradientColor = 'linear-gradient(to right, #f76570 0%, #f78d65 100%)'
    const purpleGradientColor = 'linear-gradient(to right, #ba71da 0%, #da717b 100%)'

    const packages = [
        {
            image: './assets/image/package-1-1024x640.jpg',
            icon: './assets/icon/arch.png',
            name: 'Berlin',
            location: 'Europe',
            category: { first: 'CULTURAL', second: 'RELAX' },
            price: 700,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque.',
            color: yellowGradientColor
        },
        {
            image: './assets/image/package-6-1024x640.jpg',
            icon: './assets/icon/torii-gate.png',
            name: 'Hong Kong',
            location: 'Asia',
            category: { first: 'HISTORY', second: 'CULTURAL' },
            rootPrice: 1000,
            price: 600,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque.',
            color: redGradientColor
        },
        {
            image: './assets/image/package-2-1024x640.jpg',
            icon: './assets/icon/golden-gate.png',
            name: 'San Francisco',
            location: 'United Stated',
            category: { first: 'SPORT', second: 'RELAX' },
            price: 400,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque.',
            color: purpleGradientColor
        }
    ]


    return (
        <>
            <Header home={true} />
            <div className="proposal_container p-5">
                <div className="proposal_header mb-5">
                    <div>OUR PROPOSALS</div>
                    <h2>OUR <span>DESTINATIONS</span></h2>
                </div>
                <Row>
                    {proposal.map((item, index) => {
                        return (
                            <Col key={index} md={4}>
                                <Destination proposal={item} />
                            </Col>
                        )
                    })}
                </Row>
            </div>
            <HorizontalBreak image={['./assets/image/parallax-search-2.jpg']} />
            <Article />
            <HorizontalBreak image={['./assets/image/parallax-5-filter.jpg', './assets/image/parallax-6-filter.jpg']} />

            <div className="package_container mt-3 mb-3 p-5">
                <div className="package_header">
                    <h6>PROMOTIONS</h6>
                    <h2>OUR <span>PACKAGES</span></h2>
                </div>
                <Row className='package_list'>
                    {packages.map((item, index) => {
                        return (
                            <Col md={4} key={index}>
                                <Package packages={item} />
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </>
    )
}

export default Home;