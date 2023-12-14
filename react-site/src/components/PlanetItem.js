import React from 'react'



function PlanetItem({image, name, desc}) {
  return (
    <div className="planetItem">
     <div style={{backgroundImage: `url(${image})` }}></div>
     <h1>{name}</h1>
     <p>{desc}</p>
    </div>
  )
}

export default PlanetItem
