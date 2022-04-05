import React, { useState, useEffect } from "react";
import "./GameFinish.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player/lazy";
import Granim from "granim";

function GameFinish() {
  const [L1p1, setL1p1] = useState(true);
  const [L1p2, setL1p2] = useState(false);
  const [L1p3, setL1p3] = useState(false);
  const [L1p4, setL1p4] = useState(false);
  const [L1p5, setL1p5] = useState(false);

  const monsterIcon = `https://i.imgur.com/t0Bo13f.png`;



  return (
    <section className="outro">
        <div className="bloc-logo-end">
          <div className="logo-mask-end">

              <div className="GameOver">You did it!<br />that was amazing!</div>
              <div className={L1p1 === true ? "display" : "hide"}>
              <div className="monster">
                <img src={monsterIcon} />
              </div>{" "}

              </div>
              <div className="farewell">
                I'm a monster of my word and I'll show you out of here!
                <br /> Come back and visit anytime!
                <br />
                <div className="buttonEnd">
                <Button
                  variant="outline-secondary"
                  className="buttonFinish"
                  onClick={() => setL1p2(!L1p2)}
                >
                <Link to="/"> Thanks!</Link>
                </Button>
                {/* <Button
                  variant="outline-secondary"
                  className="buttonEnd"
                  onClick={() => setL1p3(!L1p3)}
                >
                  but what?
                </Button> */}
                </div>
            </div>
          </div>
        </div>
    </section>
  );

  // at the end of the animation, a button will appear to take the player to Level1
}
export default GameFinish;
