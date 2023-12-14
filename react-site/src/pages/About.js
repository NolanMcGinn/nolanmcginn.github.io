import React from 'react';
import Neptune from "../assets/images/neptune.avif";
import "../styles/About.css"

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{backgroundImage: `url(${Neptune})` }}></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>We started funding this orginazation when the collaps of nasa has fallen...The year was 2100 and our parents got their hands on some old nasas old gear and they decided right then that it would be in the best interest of the world to continue the exploration of space.
            Since most of the information about what they have learned was lost they had to relearn it all on their own with the equipment they got.
            After they understood what was going on they passed this knowledge onto the children where we all started to see space and make plans for building rockets to try to get to Mars after find out its habitable.
            We only ask for donations for our cause as we know not everyone belives in this cause anymore and jsut wants to focus on Earth for the time being.
            But We think if we can get everyone to a new planet we could use it as a way for people to start new lifes and not be burdened by others.
            Criminals? Send them to Space Jail. Currupt politions? Same deal with them we could focus on making earth a hassle free planet and send eveyone to mars so we dont have to deal with the tomfoolery.</p>
      </div>
    </div>
  )
}

export default About
