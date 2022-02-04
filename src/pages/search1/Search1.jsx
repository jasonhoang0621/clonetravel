import { useState } from 'react';
import Header from '../../components/header/Header';
import './Search1.scss'
import { Row, Col } from 'react-bootstrap'
import Package from '../../components/package/Package';

function Search1() {
    const [isList, setIsList] = useState(false);

    const handleSetDisplayList = () => setIsList(true)
    const handleSetDisplayList2 = () => setIsList(false)

    const yellowGradientColor = 'linear-gradient(to right, #ffd205 0%, #ff9b05 100%)'
    const redGradientColor = 'linear-gradient(to right, #f76570 0%, #f78d65 100%)'
    const purpleGradientColor = 'linear-gradient(to right, #ba71da 0%, #da717b 100%)'

    const data = [
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
        },
        {
            image: './assets/image/package-3-1024x640.jpg',
            icon: './assets/icon/golden-gate.png',
            name: 'Phu Ket',
            location: 'ThaiLand',
            category: { first: 'RELAX', second: 'CULTURAL' },
            price: 1200,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque.',
            color: yellowGradientColor
        },
        {
            image: './assets/image/package-4-1024x640.jpg',
            icon: './assets/icon/torii-gate.png',
            name: 'Amsterdam',
            location: 'Netherlands',
            category: { first: 'HISTORY', second: 'SPORT' },
            price: 1500,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque.',
            color: redGradientColor
        },
        {
            image: './assets/image/package-5-1024x640.jpg',
            icon: './assets/icon/golden-gate.png',
            name: 'Tuscany',
            location: 'Italy',
            category: { first: 'SPORT', second: 'RELAX' },
            rootPrice: 950,
            price: 730,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque.',
            color: purpleGradientColor
        }
    ]

    return (
        <>
            <Header search1={true} isList={isList} handleSetDisplayList={handleSetDisplayList} handleSetDisplayList2={handleSetDisplayList2} />

            <Row className='p-md-5 p-3 '>
                {data.map((item, index) => {
                    return (
                        <Col md={4} key={index} className='search1_packages_item' >
                            <Package packages={item} />
                        </Col>
                    )
                })}
            </Row>
        </>
    );
}

export default Search1;
