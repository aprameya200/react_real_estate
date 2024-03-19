import React from 'react'

import "./card.scss"

function Card({ itemId, item }) {
    return (
        <div className='card'>
            <img src={item.img} alt="address-image" />


            <div className="item-data">
                <h1 className="title">
                    {item.title}
                </h1>
                <div className="location">
                    <img src="..\..\images\pin.png" alt="pin" />
                    <div className="span">
                        {item.address}
                    </div>
                </div>
                <div className="price">
                    <h1>
                        ${item.price}
                    </h1>
                </div>
                <div className="additional-info">
                    <div className="bedroom center">
                        <img src="..\..\images\bed.png" alt="bed" />
                        <span>
                            {item.bedroom} bedroom

                        </span>
                    </div>
                    <div className="bathroom center">
                        <img src="..\..\images\bath.png" alt="bath" />

                        <span>
                            {item.bathroom} bathroom
                        </span>
                    </div>
                    <div className="icon-one center">
                        <img src="..\..\images\save.png" alt="bath" />

                    </div>
                    <div className="icon-two center">
                        <img src="..\..\images\chat.png" alt="bath" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
