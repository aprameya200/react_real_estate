import React from 'react'

import "./filter.scss"

const Filter = () => {
    return (
        <div className='filter'>
            <p>Search results for</p>

            <div className="top">
                <div className="search-item">
                    <label htmlFor="location">Location</label>
                    <input type="text" id='city' name='city' placeholder='City Location' />
                </div>
            </div>
            <div className="bottom">
                <div className="search-item">
                    <label htmlFor="Type">Type</label>
                    <select name="type" id="types">
                        <option value="any">any</option>
                        <option value="Buy">Buy</option>
                        <option value="Rent">Rent</option>
                    </select>
                </div>
                <div className="search-item">
                    <label htmlFor="Property">Property</label>
                    <select name="property" id="property">
                        <option value="any">any</option>
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                        <option value="Condo">Condo</option>
                        <option value="Land">Land</option>
                    </select>
                </div>
                <div className="search-item">
                    <label htmlFor="min-price">Min Price</label>
                    <input type="number" id='min-price' name='min-price' placeholder='0' />
                </div>
                <div className="search-item">
                    <label htmlFor="max-price">Max Price</label>
                    <input type="number" id='max-price' name='max-price' placeholder='0' />
                </div>
                <div className="search-item">
                    <a href="">
                        <img src="..\..\images\search.png" alt="search" />

                    </a>
                </div>

            </div>
        </div>
    )
}

export default Filter
