import React from 'react'


import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';

import './map.scss'

import "leaflet/dist/leaflet.css"

import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

import Pin from '../pin/pin';



function Map({ data }) {

    return (
        <MapContainer center={[51.505, -0.09]} zoom={7} scrollWheelZoom={false} className='map' >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data.map((item) => <Pin data={item} key={item.id}></Pin>)}
        </MapContainer >
    )
}

export default Map
