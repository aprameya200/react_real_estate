import React, { useState } from 'react'

import { useEffect } from 'react';

import "./searchBar.scss";

function SearchBar() {

    const [searchType, toggleType] = useState(true)

    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0
    })

    const setType = () => {
        console.log("Clicked")
        toggleType(!searchType)
    }

    return (
        <div className='searchBar'>
            <div className="type">
                <button className={!searchType ? "buy center active" : "buy center"} onClick={setType}>Buy</button>
                <button className={searchType ? "rent center" : "rent center active"} onClick={setType}>Rent</button>
            </div>
            <form action="">
                <input type="text" name="location" placeholder='City Location' />
                <input type="text" name="minPrice" min={0} max={10000000} placeholder='Min Price' />
                <input type="text" name="maxPrice" min={0} max={10000000} placeholder='Max Price' className='max-price' />

                <button>
                    <img src="..\..\images\search.png" alt="search" />
                </button>
            </form>

        </div>
    )
}

export default SearchBar
