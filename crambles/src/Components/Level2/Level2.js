import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Riddles from "./Riddles";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import "./Level2.css";

const Level2 = () => {

  const randomIndex = Math.floor(Math.random() * Riddles.length); //this is the number in the array

  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [button1, setButton1] = useState("");
  const [button2, setButton2] = useState("");
  const [randomNumber, setRandomNumber] = useState(randomIndex);

  const CheckAnswer = () => {
    if (Riddles[randomNumber].answer[0] === guess || Riddles[randomNumber].answer[1] === guess) {
      setFeedback("you got it right!");
      setButton2("go to level 3");
      setButton1("");
    } else {
      setFeedback("nope");
      setButton1("Try Again");
    }
  };
  const tryAgain = () => {
    setGuess("");
    setButton1("");
    setFeedback("");
  };

  const onChange = (event) => {
    let input = event.target.value.toLowerCase();
    setGuess(input);
  };
  return (
    <>
      <div className="Level2">
        <div className="container2">
          <h1>RIDDLE GUESS THING</h1>

          <p className="riddleIntro">This will be the game intro</p>

          <div className="Riddle">This is the RIDDLE!!: {Riddles[randomNumber].riddle}</div>
        </div>


      <InputGroup className="mb-3">
        <FormControl
          onChange={onChange}
          value={guess}
          placeholder="Your Guess Here"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button
          onClick={CheckAnswer}
          variant="outline-secondary"
          id="button-addon2"
        >
          Submit
        </Button>
      </InputGroup>
      <div>{feedback}</div>

      <Button
        onClick={() => tryAgain()}
        style={{ display: button1 === "Try Again" ? "inline" : "none" }}
      >
        {button1}
      </Button>

      <Link to="/Level3" className="toLevelThree">
        <Button
          onClick={() => setGuess("")}
          style={{ display: button2 === "go to level 3" ? "inline" : "none" }}
        >
          {button2}
        </Button>
      </Link>
      </div>
    </>
  );
};
export default Level2;
