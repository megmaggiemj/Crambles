import React, { useState, useEffect } from "react";
import "./GameStart.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player/lazy";

function GameStart() {

// var i = 0;
// var txt = 'Lorem ipsum typing effect!'; /* The text */
// var speed = 50; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
  return (
    <div className="intro">
      <>
        {/* // This page will be an animation scene that will play on page load.  */}
        <div className="L1-p1">
          Hi there!</div> <br></br>
        <div className="L1-p2">Looks like you got a little lost on your hike! I can help
          you get back on track...</div>
          <p id="demo"></p>
        <p className="L1-p3">
          but...do you think you could help me with a few things first? Do
          you..know how to...read?
        </p>
        <div className="L1-p4">
          A friend from far away sent me these fun games but I can't read human
          words!
        </div>
        <div className="L1-p5">
          If you help me figure these out, I promise to help you get home!
        </div>

        {/* <ReactPlayer
          className="player"
          url="https://www.youtube.com/watch?v=oUFJJNQGwhk"
        /> */}
        <div>
          <Button variant="outline-secondary" className="toLevelOneButton">
            <Link to="/Level1" className="toLevel1">
              I'll help you!
            </Link>
          </Button>{" "}
        </div>
      </>
    </div>
  );

  // at the end of the animation, a button will appear to take the player to Level1
}
export default GameStart;
