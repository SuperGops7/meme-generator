import "../style.css"
import React from "react"
import trollFace from "../images/troll-face.png"

export default function Header() {
    return(
        <header className="header">
            <img src={trollFace} className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header-nggyu">Never gonna give you up</h4>
        </header>
    )
}