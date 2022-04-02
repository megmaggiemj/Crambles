import React, { useState, useEffect } from "react";
import "./Level3.css";
import { Link } from "react-router-dom";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

const Level3 = () => {
  //   const randomIndex = Math.floor(Math.random() * WordList.length); //this is the number in the array

  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [button1, setButton1] = useState("");
  const [button2, setButton2] = useState("");
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);
  const [box5, setBox5] = useState(false);
  const [box6, setBox6] = useState(false);

  setTimeout(() => {
    setBox1(false);
    setBox2(false);
    setBox3(false);
    setBox4(false);
    setBox5(false);
    setBox6(false);
  }, 1800);

  // const matchCheck = () => {
  //   if the first two selected boxes are the same, keep front face up.

  // }

  return (
    <>
      <div className="boxContainer">
        {/* { here is some statement that can be TRUE or FALSE ? if it is TRUE then do this thing : if it is FALSE then do this thing} */}
        <div
          className={box1 === true ? "box1 front" : "box1 back"}
          onClick={() => setBox1(!box1)}
        >
          {box1 === true ? "Cat here!" : "?"}
        </div>
        <div
          className={box2 === true ? "box2 front" : "box2 back"}
          onClick={() => setBox2(!box2)}
        >
          {box2 === true ? "mouse here" : "?"}
        </div>
        <div
          className={box3 === true ? "box3 front" : "box3 back"}
          onClick={() => setBox3(!box3)}
        >
          {box3 === true ? "frog here!" : "?"}
        </div>
        <div
          className={box4 === true ? "box4 front" : "box4 back"}
          onClick={() => setBox4(!box4)}
        >
          {box4 === true ? "Cat here!" : "?"}
        </div>
        <div
          className={box5 === true ? "box5 front" : "box5 back"}
          onClick={() => setBox5(!box5)}
        >
          {box5 === true ? "mouse here" : "?"}
        </div>
        <div
          className={box6 === true ? "box6 front" : "box6 back"}
          onClick={() => setBox6(!box6)}
        >
          {box6 === true ? "frog here!" : "?"}
        </div>
      </div>
    </>
  );
};
export default Level3;
