import React from 'react'
import {planetList} from "../helpers/PlanetList"
import PlanetItem from '../components/PlanetItem'
import "../styles/Planet.css"

function Planets() {
  return (
    <div className="planets">
      <h1>Check Out Some Of These Planets</h1>
      <div className="planetList">
        {planetList.map((planetItem, key)=>{
            return <PlanetItem 
            key={key}
            image={planetItem.image} 
            name={planetItem.name} 
            desc={planetItem.desc}/>
        })}
      </div>
    </div>
  )
}

export default Planets
