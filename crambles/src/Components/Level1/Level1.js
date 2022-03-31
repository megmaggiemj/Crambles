import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WordList from "./WordList";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";


const Level1 = () => {
  const randomIndex = Math.floor(Math.random() * WordList.length); //this is the number in the array

  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [button1, setButton1] = useState("");
  const [button2, setButton2] = useState("");
  const [userInput, setUserInput] = useState("");
  const [randomNumber, setRandomNumber] = useState(randomIndex);
  
  const Word = WordList[randomIndex]; //this is the random string;
// console.log(randomIndex)
// console.log(Word)


  const CheckAnswer = (event) => {
    event.preventDefault()
    setGuess(userInput)
    if (WordList[randomNumber].answer === guess) {
      setFeedback("you got it right!");
      setButton2("go to level 2");
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
    event.preventDefault();
    let input = event.target.value.toLowerCase();
    setGuess(input);
  };

  //   const onChange = (event) => {
  //   let input = event.target.value.toLowerCase();
  //   setUserInput(input);
  // };

  return (
    <>
      <div className="Level1">
        <div className="container">
          <h1>Word scramble extravaganza</h1>

          <p className="Level1">This will be the game intro</p>

          <div className="Word1">
            This is the word to unscramble: {WordList[randomNumber].scrambledWord}
          </div>
        </div>
      </div>

      <InputGroup className="mb-3">
        <FormControl
          onChange={onChange}
          value={guess}
          placeholder="What is the Word?"
          aria-label=""
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

      <Link to="/Level2" className="toLevelTwo">
        <Button
          onClick={() => setGuess("")}
          style={{ display: button2 === "go to level 2" ? "inline" : "none" }}
        >
          {button2}
        </Button>
      </Link>
    </>
  );
};
export default Level1;
