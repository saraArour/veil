import React from 'react'
import "./navbar.css"
import { BiPyramid } from 'react-icons/bi';

function NavBar(props){

    return (  
    <>
    <div className="navBarContainer">
        <div className="logo"><BiPyramid style={{width :"100px", height :"90px"}}/> Veil</div>
        <div className="menu">
            <ul className="menu-list">
                <li id="#About" className="list">About Us</li>
                <li id="#Process" className="list">Process</li>
                <li id="#Pricing" className="list">Pricing</li>
                <li id="#Contact" className="list">Contact</li>
            </ul>
        </div>
        <div className="connect">
            <div className="selectLang">
            <select>
                   <option value="0">En</option>
                   
                   <option value="1">Fr</option>
            </select>
             {/* <div className="sel"></div> */}
            </div>
            <button className="Request">Request a free demo</button>
        </div>
    </div>
    </>

    );
}
 
export default NavBar;