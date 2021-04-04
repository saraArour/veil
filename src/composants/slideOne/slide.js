import React from 'react'
import "./slide.css"


function Slide(props){

    return ( 
        <div className="SlideContainer">
            <div className="partOne"> 
                 <div className="titlePartOne"><h1>We get data</h1></div>
                 <div className="PartOnetEXT">
                    <p>Veil gets you covered, and brings all the data you need all in one place.
                      Data gathering and analysis becomes easy with <b>Veil.</b>
                    </p>
                 </div>
               <div className="Btn">
                  <button className="Start">Start Now</button>
                  <button className="Learn">Learn Now</button>
              </div>  
            </div>
            
            {/* <div className="partTwo">  <img src="pie-chart.png" alt="Paris" width="485" height="359"/></div> */}
            <div className="partTwo"> {props.image} </div>
        </div>

        
     );
    
}
 
export default Slide ;