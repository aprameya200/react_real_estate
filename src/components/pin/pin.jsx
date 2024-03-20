import React from 'react'

import "./pin.scss"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import "leaflet/dist/leaflet.css"

import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import L from 'leaflet';

const icon = L.icon({
    iconRetinaUrl: iconMarker,
    iconUrl: iconMarker,
    shadowUrl: iconShadow
});

function Pin({ data }) {

    return (
        <Marker position={[data.latitude, data.longitude]} icon={icon}>
            <Popup >
                <div className="popup">
                    <img src={data.img} alt="image" />

                    <div className="details">
                        <h1>{data.title}</h1>
                        <p>Bedrooms: {data.bedroom}</p>
                        <p className="price">$ {data.price}</p>
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}

export default Pin
