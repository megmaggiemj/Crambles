import React, { useState, useEffect } from "react";
import "./GameStart.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player/lazy";

function GameStart() {
  return (
    <div className="intro">
      <>
        {/* // This page will be an animation scene that will play on page load.  */}
        <ReactPlayer
          className="player"
          url="https://www.youtube.com/watch?v=oUFJJNQGwhk"
        />
        <div>
          <Button variant="outline-secondary" className="toLevelOneButton">
            <Link to="/Level1" className="toLevel1">
              let the games begin
            </Link>
          </Button>{" "}
        </div>
      </>
    </div>
  );

  // at the end of the animation, a button will appear to take the player to Level1
}
export default GameStart;
