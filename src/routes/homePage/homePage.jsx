import React from 'react'

import SearchBar from '../../components/searchBar/SearchBar';

import "./homePage.scss";

function HomePage() {
    return (
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                    <div className="title">
                        <h1>Find Real Estate & Get Your Dream Place</h1>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum distinctio sequi nostrum mollitia sed, labore quo facilis deleniti maiores a impedit. Iste inventore nisi cupiditate iusto quod aspernatur sed labore!</p>

                    <SearchBar></SearchBar>

                    <div className="stats-numbers">
                        <div className="stats">
                            <h2>16+</h2>
                            <span>Years Of Experience</span>
                        </div>
                        <div className="stats">
                            <h2>200</h2>
                            <span>Awards Gained</span>
                        </div>
                        <div className="stats">
                            <h2>1200+</h2>
                            <span>Property Readt</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="imageContainer">
                <img src="..\..\images\bg.png" alt="background" />
            </div>
        </div>
    )
}

export default HomePage
