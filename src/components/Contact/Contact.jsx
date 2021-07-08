import React from "react";
import'./Contact.css';
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import email from '../../img/email.png'



export default function Contact() {
    return (

        <div className="containerIconosRedes">
                <span className="spanLinks">
                    <a className="iconosRedes" href="https://github.com/nicoirigoyen">
                    <img id="logo" src={github} width="30" height="30" className='iconImg' alt="" />
                    </a>
                    <a className="iconosRedes" href="https://www.linkedin.com/in/nicolas-irigoyen-terre/">
                    <img id="logo" src={linkedin} width="30" height="30" className='iconImg' alt="" />
                    </a>
                    <a className="iconosRedes" href="https://nico.irigoyen.terre@hotmail.com">
                    <img id="logo" src={email} width="30" height="30" className='iconImg' alt="" />
                    </a>
                </span>
        </div>
        
    )
}