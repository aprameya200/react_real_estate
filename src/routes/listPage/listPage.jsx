import React from 'react'
import "./listPage.scss"

import Filter from '../../components/filter/filter';
import Card from '../../components/card/card';
import { listData } from "../../lib/dummydata"

function ListPage() {

    const data = listData;

    return (
        <div className='list-page'>
            <div className="list-container">
                <div className="wrapper">
                    <Filter></Filter>
                    {listData.map((item) => <Card item={item} itemId={item.id}></Card>)}
                </div>
            </div>
            <div className="map-container">
                map
            </div>
        </div>
    )
}

export default ListPage
