import React, { useState, useEffect } from "react";
import "./GameStart.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player/lazy";
import Granim from "granim";

function GameStart() {
  const [L1p1, setL1p1] = useState(true);
  const [L1p2, setL1p2] = useState(false);
  const [L1p3, setL1p3] = useState(false);
  const [L1p4, setL1p4] = useState(false);
  const [L1p5, setL1p5] = useState(false);
  const monsterIcon = `https://i.imgur.com/t0Bo13f.png`;

  return (
    <section className="intro">
        <div className="bloc-logoStart"> {/*text block*/}
          <canvas id="logo-canvasStart"></canvas> {/*the actual gradient */}
          <div className="logo-maskStart">
            <div className={L1p1 === true ? "display" : "hide"} id="Conversation">
              <div className="monster">
                <img src={monsterIcon} />
              </div>{" "}
              <br />
              <div className="hiThere">Hi there! I'm Taylor!</div>
              <div className={L1p1 === true ? "display" : "hide"}>
                <Button
                  variant="outline-secondary"
                  className="buttonP2"
                  onClick={() => setL1p2(!L1p2)}
                >
                  Oh! um..hello!?!
                </Button>
              </div>
              <div className={L1p2 === true ? "display" : "hide"}>
                Looks like you got a little lost on your hike! I can help you
                get back on track...but...
                <br></br>{" "}
                <Button
                  variant="outline-secondary"
                  className="buttonP3"
                  onClick={() => setL1p3(!L1p3)}
                >
                  but what?
                </Button>
              </div>
              <div className={L1p3 === true ? "display" : "hide"}>
                ...do you think you could help me with a few things first? Do
                you..know how to...read?
                <br></br>
                <Button
                  variant="outline-secondary"
                  className="buttonP4"
                  onClick={() => setL1p4(!L1p4)}
                >
                  I do!
                </Button>
              </div>
              <div className={L1p4 === true ? "display" : "hide"}>
                A friend from far away sent me a book of fun games but I can't
                read human words!
                <br></br>
                <Button
                  variant="outline-secondary"
                  className="buttonP4"
                  onClick={() => setL1p5(!L1p5)}
                >
                  oh!
                </Button>
              </div>
              <div className={L1p5 === true ? "display" : "hide"}>
                If you help me figure these out, I promise to help you get home!
                <br></br>
                <Button className="buttonP5">
                  <Link to="/Level1">I'll help you!</Link>
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>
    </section>
    
  );

  // at the end of the animation, a button will appear to take the player to Level1
}
export default GameStart;
