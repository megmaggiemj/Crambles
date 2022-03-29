import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WordList from './WordList';
import { InputGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';


const Level1 = () => {
    const [guess, setGuess] = useState('');
    const [feedback, setFeedback] = useState('');
    const [button, setButton] = useState('')
    const CheckAnswer = () => {
        if (WordList[0].answer === guess) {
            setFeedback("you got it right!")
        } else {
            setFeedback("nope") 
            setButton("Try Again")
            }
    }


    const onChange = (event) => {
        let input = (event.target.value).toLowerCase()
        setGuess(input);
      }
    return(
        <>
        <div className='Level1'>
            <div className='container'>
                <h1>Word scramble extravaganza</h1>
                
                <p className='Level1'>This will be the game intro</p>

                <div className='Word1'>This is the word to unscramble: {WordList[0].scrambledWord}</div>
            </div> 

            </div>

            <InputGroup className="mb-3">
            <FormControl
            onChange={onChange}
            value={guess} placeholder="What is the Word?"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <Button onClick={CheckAnswer} variant="outline-secondary" id="button-addon2">
            Submit
            </Button>
            </InputGroup>
        <div>{feedback}</div>
        <Button onClick={() => setGuess('')} style={{ display: button === 'Try Again' ? "inline" : "none" }}>{button}</Button>
        </>
     );
};
export default Level1