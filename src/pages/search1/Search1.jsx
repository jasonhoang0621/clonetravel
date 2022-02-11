import { useState } from 'react';
import Header from '../../components/header/Header';
import './Search1.scss'
import { Row, Col } from 'react-bootstrap'
import Package from '../../components/package/Package';
import { data } from '../../store/data'

function Search1() {
    const [isList, setIsList] = useState(false);

    const handleSetDisplayList = () => setIsList(true)
    const handleSetDisplayList2 = () => setIsList(false)

    return (
        <div className="search1_container">
            <Header search1={true} isList={isList} handleSetDisplayList={handleSetDisplayList} handleSetDisplayList2={handleSetDisplayList2} />

            <Row className='search1_package_list p-md-5 p-3 m-0 m-md-5'>
                {data.map((item, index) => {
                    return (
                        <Col md={4} key={index} className='search1_packages_item' >
                            <Package packages={item} />
                        </Col>
                    )
                })}
            </Row>
        </div>
    );
}

export default Search1;