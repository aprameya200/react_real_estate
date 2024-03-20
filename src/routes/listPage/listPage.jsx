import React from 'react'
import "./listPage.scss"

import Filter from '../../components/filter/filter';
import Card from '../../components/card/card';

import Map from '../../components/map/map';
import { listData } from "../../lib/dummydata"

import PerfectScrollbar from 'react-perfect-scrollbar'

function ListPage() {

    const data = listData;

    return (
        <div className='list-page'>
            <div className="list-container">
                <div className="wrapper">
                    <Filter></Filter>
                    {/* <PerfectScrollBar></PerfectScrollBar> */}
                    {listData.map((item) => <Card item={item} itemId={item.id}></Card>)}
                </div>
            </div>
            <div className="map-container">
                <Map data={data}></Map>
            </div>
        </div>
    )
}

export default ListPage
