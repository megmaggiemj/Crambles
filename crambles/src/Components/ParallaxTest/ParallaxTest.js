import React from "react"
import { Parallax } from "react-parallax"
import "./ParallaxTest.css"
const background = "https://i.imgur.com/vbXatyZ.png";
const midground = "https://i.imgur.com/jHZpH2e.png";
const foreground = "https://i.imgur.com/GrXkiOl.png";

function Testing() {
    return (
    <div className="test">
        <Parallax className="pTest" bgImage={ background } strength={ 500 } >
            <div className="container">
                <div className="words">
                This is a test
                </div>
            </div>
        </Parallax>
        <div className="test2"></div>
    </div>
    )
}

export default Testing;