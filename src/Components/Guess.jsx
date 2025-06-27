import { useState } from 'react';

const Guess = ({input, setInput, status, checkAnswer}) => {

    return (
        <form className="answer-container" onSubmit={checkAnswer}>
            <input id={status} type="text" value={input} onChange={(e) => setInput(e.target.value)} name="my-answer" placeholder='Guess which plant this is!'></input>
            <button type="submit" className="submit-button">
                Check Answer
            </button>
        </form>
    );
};

export default Guess;