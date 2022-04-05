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
      setFeedback("That's it! That's the answer!");
      setButton2("go to level 3");
      setButton1("");
    } else {
      setFeedback("I don't think that's it. Give it another shot!");
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
          <h1 className="L2Intro">This game is a riddle!<br/></h1>

          <p className="riddleIntro">Let's give it a try!</p>

          <div className="Riddle">{Riddles[randomNumber].riddle}</div>



      <InputGroup className="mb-3">
        <FormControl
          className="input2"
          onChange={onChange}
          value={guess}
          placeholder="What's the answer?"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <br />
        <Button
          onClick={CheckAnswer}
          variant="outline-secondary"
          id="button-addon2"
        >
          Submit
        </Button>
      </InputGroup>
      <div className="feedback">{feedback}</div>
      <Button
        onClick={() => tryAgain()}
        style={{ display: button1 === "Try Again" ? "inline" : "none" }}
      >
        {button1}
      </Button>

      <Link to="/GameOver" className="toLevelThree">
        <Button
          onClick={() => setGuess("")}
          style={{ display: button2 === "go to level 3" ? "inline" : "none" }}
        >
          {button2}
        </Button>
      </Link>
      </div>
      </div>
    </>
  );
};
export default Level2;
