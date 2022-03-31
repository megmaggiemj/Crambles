
import React, { useState, useEffect } from "react";
import './Level3.css'
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
  const [box1, setBox1] = useState(false)
  const [box2, setBox2] = useState(false)
  const [box3, setBox3] = useState(false)
//   const [randomNumber, setRandomNumber] = useState(randomIndex);

//   const CheckAnswer = (event) => {
//     event.preventDefault()
//     if (WordList[randomNumber].answer === guess) {
//       setFeedback("you got it right!");
//       setButton2("go to level 2");
//       setButton1("");
//     } else {
//       setFeedback("nope");
//       setButton1("Try Again");
//     }
//   };
//   const tryAgain = () => {
//     setGuess("");
//     setButton1("");
//     setFeedback("");
//   };

//   const onChange = (event) => {
//     event.preventDefault();
//     let input = event.target.value.toLowerCase();
//     setGuess(input);
//   };

  //   const onChange = (event) => {
  //   let input = event.target.value.toLowerCase();
  //   setUserInput(input);
  // };

  return (
    <>
    <div className="container">
    {/* { here is some statement that can be TRUE or FALSE ? if it is TRUE then do this thing : if it is FALSE then do this thing} */}
    <div className="col1" onClick={() => setBox1(!box1)}>{box1 === true ? 'Cat here!' : ''}</div> 
    <div className="col2" onClick={() => setBox2(!box2)}>{box2 === true ? 'Snail here!' : ''}</div>
    <div className="col3" onClick={() => setBox3(!box3)}>{box3 === true ? 'Frog here!' : ''}</div>
    </div>
    </>
  );
};
export default Level3
