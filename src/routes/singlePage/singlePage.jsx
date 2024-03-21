import React from 'react'

import "./singlePage.scss"
import { singlePostData } from '../../lib/dummydata'

function SinglePage({ item }) {

    const singlePost = singlePostData;

    return (
        <div className='singlePage'>
            <div className="white-container">
                <div className="wrapper">
                    <div className="image-container">
                        <img src={singlePost.images[0]} alt="" />
                        <div className="right">
                            <img src={singlePost.images[0]} alt="" />
                            <img src={singlePost.images[1]} alt="" />
                            <img src={singlePost.images[2]} alt="" />
                        </div>
                    </div>
                    <div className="info-container">
                        <div className="top">
                            <div className="title">
                                <h1>Beautiful Aprtment</h1>
                                <div className="location">
                                    <img src="..\..\images\pin.png" alt="pin" />
                                    <p>8765 Main High Street, London</p>

                                </div>
                                <div className="cost">
                                    <p>$ 1200</p>
                                </div>
                            </div>
                            <div className="owner">
                                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="owner" />
                                <p>John Doe</p>
                            </div>
                        </div>
                        <div className="bottom">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius dicta maxime et ex enim, laborum dolorum accusantium saepe quisquam laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quisquam possimus veniam sequi. Fuga, odio, necessitatibus aliquam dolores numquam nam iste molestias error delectus veniam fugiat obcaecati tempore ab reprehenderit nulla iusto hic repellendus odit alias aspernatur magni! Voluptate repellendus numquam distinctio quam, maxime molestiae aperiam facilis amet repellat expedita!</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="gray-container">
                <h1 className='block-header'>General</h1>
                <div className="features">
                    <div className="utilities feature">
                        <div className="image-container">
                            <img src="..\..\images\utility.png" alt="pin" />

                        </div>
                        <div className="feature-text">
                            <h1>Utilities</h1>
                            <p>Renter is responsible</p>
                        </div>
                    </div>
                    <div className="pet-policy feature">
                        <img src="..\..\images\pet.png" alt="pin" />
                        <div className="feature-text">
                            <h1>Pet Policy</h1>
                            <p>Pets Allowed</p>
                        </div>
                    </div>
                    <div className="property-fees feature">
                        <img src="..\..\images\fee.png" alt="pin" />
                        <div className="feature-text">
                            <h1>Property Fee</h1>
                            <p>Must have 3x the rent in total household income</p>
                        </div>
                    </div>
                </div>
                <h1 className='block-header'>Room Sizes</h1>
                <div className="room-sizes">
                    <div className="room-size">
                        <img src="..\..\images\size.png" alt="pin" />
                        <span>80sqm</span>
                    </div>
                    <div className="room-size">
                        <img src="..\..\images\bed.png" alt="pin" />
                        <span>2 bed</span>
                    </div>
                    <div className="room-size">
                        <img src="..\..\images\bath.png" alt="pin" />
                        <span>1 bathroom</span>
                    </div>
                </div>
                <h1 className='block-header'>Nearby Places</h1>
                <div className="nearby-places">
                    <div className="nearby-place">
                        <img src="..\..\images\school.png" alt="pin" />
                        <div className="place-name">
                            <p>School</p>
                            <span>250m away</span>
                        </div>
                    </div>

                    <div className="nearby-place">
                        <img src="..\..\images\bus.png" alt="pin" />
                        <div className="place-name">
                            <p>School</p>
                            <span>250m away</span>
                        </div>
                    </div>
                    <div className="nearby-place">
                        <img src="..\..\images\restaurant.png" alt="pin" />
                        <div className="place-name">
                            <p>School</p>
                            <span>250m away</span>
                        </div>
                    </div>
                </div>
                <h1 className='block-header'>Location</h1>
                <div className="location">

                </div>
            </div>
        </div>
    )
}

export default SinglePage
