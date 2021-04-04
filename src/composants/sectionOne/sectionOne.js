import React from 'react'
import "./sectionOne.css"



function SectionOne(props){
    return(
<div className="SectionOneContainer"> 
      <div className="titleSectionOne"><h1>How does it work </h1></div>
      <div className="steps-container">
          <div className="stepOneImages">
              <div className="shape">
              <img src="Polygon 1.png"  width="200" height="300"/> 
              <img src="Group 8.png"  width="200" height="100"/>
              </div>
             
              <img className="IMAGEMom"src="hp-primary-desktop_e0dab1f509.svg"  width="700" height="400"/>
              <img className="IMAGEbABY" src="step1.svg"  width="300" height="400"/>

            
          </div>
          <div className="stepOneContent">
             <div className="StepOne">step 1</div>
             <div className="titleStepOne">Create automatic daily tasks.</div>
             <div className="StepOneText">No more need to wake up everyday to read the news. Our bots will do that for you everyday,at every minute of the day and will gather all the articles you need and their content, with images, videos & more.</div>
          </div>
      </div>
</div>
    );
}
export default SectionOne;