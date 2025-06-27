import { useState } from 'react';

const Guess = ({currPlant}) => {
    const [input, setInput] = useState("");
    const [status, setStatus] = useState("")

    const checkAnswer = (e) => {
        console.log(currPlant)
        console.log(input)
        e.preventDefault(); 
        if (currPlant == input) {
            setStatus("correct")
        }
        else{
            setStatus("wrong")
        }
    }

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