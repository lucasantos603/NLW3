import React from 'react';
import {Link} from "react-router-dom"
import {FiPlus} from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import mapMakingImg from '../images/mapMakingImg.svg'

import '../styles/orphanages-map.css'

function OrphanegesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMakingImg} alt="Happy"/>
                    <h2>Escolha um Orfanato no Mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Rio de Janeiro</strong>
                    <span>Rio de Janeiro</span>
                </footer>
            </aside>
            
            <Map 
                center = {[-22.8493711,-43.2618207]}
                zoom = {15}
                style = {{width: '100%', height:'100%'}}
            >

                {/**/}

                <TileLayer url = "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Map>
                
            

            <Link to ="/" className = "create-orphanage"> 
                <FiPlus size = {32} color= "#fff"/>
            </Link>

        </div>
    )
}

export default OrphanegesMap;