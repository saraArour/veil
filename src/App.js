
import './App.css';
import NavBar from "./composants/navbar/navbar"
import Slide from "./composants/slideOne/slide"
import Triangle from "./composants/triangle/triangle"
import  SectionOne from "./composants/sectionOne/sectionOne"
import React from "react";
import { useState, useEffect,useContext } from "react";
import gsap  from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  //declarer le hook
  const [image,setImage]= React.useState({});
  //definir chaq etat
  //1- etat init de l image
  const mg=()=>{return(image= <img alt=" " width="485" height="359"/> )}
  //1- set etat de l image

  const newm= ()=>{return(setImage=()=>{
    return({
           ScrollTrigger:{
                         trigger:"partTwo",
                         toggleActions:"restart pause revers pause"
                         },
           x:400,
           rotation:360,
           duration:3
})})}
// annimation de mg : etat init de l image, partTwo c est la classe de la div image , elle est declare ds le composant slide
      gsap.from(".partTwo",{mg})
// annimation de mg : etat annimatio de l image
      const annim=()=>{
            gsap.to(".partTwo",{newm})}
// changer l etat
   useEffect(()=>{
                annim()
   },[])
  
  return (
    <div className="App">

      <div className="App-container">
         <div className="slide-content">
          
             <NavBar/>
             {/* slide contient la div de l image et  a image comme props */}
             <Slide image={image}/>
            <div className="triangleu">  <Triangle/></div>
         </div>
      </div>
      <div className="sectionUn">
           <div className="sectionUn-container">
                <SectionOne/>
          </div>
      
      </div>
      
             
         
      
      
    </div>
  );
}

export default App;
