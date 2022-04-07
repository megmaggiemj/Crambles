import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WordList from "./WordList";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import './Level1.css'

const Level1 = () => {
  const randomIndex = Math.floor(Math.random() * WordList.length); //this is the number in the array
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [button1, setButton1] = useState("");
  const [button2, setButton2] = useState("");
  const [randomNumber, setRandomNumber] = useState(randomIndex);
  const bookIcon = `https://i.imgur.com/UU9nCLH.png`
  const CheckAnswer = (event) => {
    event.preventDefault()
    if (WordList[randomNumber].answer === guess) {
      setFeedback("Yay! You got it right!");
      setButton2("go to level 2");
      setButton1("");
    } else {
      setFeedback("Hm, that's not right. want to try again?");
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
    let input = event.target.value.toLowerCase().trim();
    setGuess(input);
  };


  return (
    <>
      <div className="Level1">
        <div className="containerL1">
          <h1>This first game is a word scramble!</h1>
          <i className="book"><img src= {bookIcon}/></i>
          <p className="L1Intro">What do you think this word is supposed to be?</p>
          <div className="Word1">{WordList[randomNumber].scrambledWord}
          </div>
      <div className="Answer">
      <InputGroup className="group">
        <FormControl
          className="input"
          onChange={onChange}
          value={guess}
          placeholder="What is the Word?"
          aria-label=""
          aria-describedby="basic-addon2"/>
        <br />
        <Button
          onClick={CheckAnswer}
          variant="outline-secondary"
          id="button-addon2">
          Submit
        </Button>
      </InputGroup>
      <br />
      <div>{feedback}</div>
      <div className="L1-TryAgain">
      <Button 
        onClick={() => tryAgain()}
        style={{ display: button1 === "Try Again" ? "inline" : "none" }}
      >
        {button1}
      </Button>
      </div>
      <div>
      <Link to="/Level2" className="toLevelTwo">
        <Button
          onClick={() => setGuess("")}
          style={{ display: button2 === "go to level 2" ? "inline" : "none" }}
        >
          {button2}
        </Button>
      </Link>
      </div>
      </div>
      </div>
      <footer className="attribution"><a href="https://www.flaticon.com/free-icons/book" title="book icons">Book icon created by Freepik - Flaticon</a></footer>
      </div>
    </>
  );
};
export default Level1;
