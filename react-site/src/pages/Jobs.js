import React from 'react'
import {jobList} from "../helpers/JobList"
import JobItem from '../components/JobItem'
import "../styles/Jobs.css"

function Jobs() {
  return (
    <div className='Jobs'>
      <h1>Here area some of the jobs we are offering right now!</h1>
      <div className="jobList">
        {jobList.map((jobItem, key)=>{
            return <JobItem 
            key={key}
            name={jobItem.name} 
            desc={jobItem.desc}/>
        })}
      </div>
    </div>
  )
}

export default Jobs
