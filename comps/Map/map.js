import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'
import { blueOption, polyline, surreyPolyline, markers, surreyMarkers, endPointsMarkers} from '../../data'
import { icon } from "leaflet"

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker} from 'react-leaflet'

export default function Map(){

    const Icon = icon({
        iconUrl: "/skytrain.png",
        iconSize: [35,35],
      })

    return(
        <MapContainer className={style.map} center={polyline[8]} zoom={12} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((o)=>(
            <Marker position={o.coordinate} icon={Icon}>
                <Popup>
                   {o.popUp}
                </Popup>
            </Marker>
            ))}
            {surreyMarkers.map((o)=>(
            <Marker position={o.coordinate} icon={Icon}>
                <Popup>
                   {o.popUp}
                </Popup>
            </Marker>
            ))}
            {endPointsMarkers.map((o)=>(
            <CircleMarker center={o.coordinate} pathOptions={blueOption} radius={15}>
                <Popup>
                    {o.popUp}
                </Popup>
            </CircleMarker>
            ))}
            
            <Polyline pathOptions={blueOption} positions={polyline}/>
            <Polyline pathOptions={blueOption} positions={surreyPolyline}/>
        </MapContainer>
    )
}