import React from "react"
import { Parallax } from "react-parallax"
import "./ParallaxTest.css";
const background = "https://i.imgur.com/vbXatyZ.png";
const midground = "https://i.imgur.com/jHZpH2e.png";
const foreground = "https://i.imgur.com/GrXkiOl.png";

function Testing() {

    return (
    <div className="test">
        <Parallax className="midground" bgImage={ midground } strength={ 600 } >

            <div>
            {/* <Parallax className="midground" bgImage={ midground } strength ={ 100 }>
                <div className="moreWords">This is the second part of the Test</div>
            </Parallax>
            <div className="test2"></div> 
            </div>
            <div>
            <Parallax className="foreground" bgImage={ foreground } strength ={ 100 }>
                <div className="evenMoreWords">This is the third part of the Test</div>
            </Parallax> */}
        </div> 
        <div className="container">
                <div className="words">
                This is a test
                </div>
            </div>
        </Parallax>

    </div>

    )
    
}

export default Testing;