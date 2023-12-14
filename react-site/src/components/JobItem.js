import React from 'react'

function JobItem({name, desc}) {
  return (
    <div>
      <div className="jobItem">
     <h1>{name}</h1>
     <p>{desc}</p>
    </div>
    </div>
  )
}

export default JobItem
