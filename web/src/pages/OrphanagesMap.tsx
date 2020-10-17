import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import mapMakingImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';
import mapIcon from '../util/mapIcon';
import api from '../services/api';

interface Orphanage_interface{
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanegesMap() {
    const [orphanages, setOrphanages] = useState<Orphanage_interface[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data)
        })
    }, []);

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMakingImg} alt="Happy" />
                    <h2>Escolha um Orfanato no Mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Rio de Janeiro</strong>
                    <span>Rio de Janeiro</span>
                </footer>
            </aside>

            <Map
                center={[-22.8493711, -43.2618207]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >

                {/**/}

                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {orphanages.map(orphanage => {
                    return (
                        <Marker
                            key = {orphanage.id}
                            icon={mapIcon} 
                            position={[orphanage.latitude, orphanage.longitude]}>

                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                {orphanage.name}

                                <Link to={`/Orphaneges/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#fff"> </FiArrowRight>
                                </Link>
                            </Popup>

                        </Marker>
                    )
                })}

            </Map>



            <Link to="/orphanege/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>

        </div>
    )
}

export default OrphanegesMap;