import './App.css';
import { useState } from 'react';
import Guess from './Components/Guess.jsx';

const App = () => {

  const [index, setIndex] = useState(0);
  const [side, setSide] = useState(1);

  const [first, setFirst] = useState("end");
  const [last, setLast] = useState("");

  const [plants, setPlants] = useState([
    [<p>Indian Paintbrush (Castilleja species)</p>, <img src="./public/assets/indianpaintbrush.jpg"></img>, "red"],
    [<p>California Poppy (Eschscholzia californica)</p>, <img src="./public/assets/poppy.jpg"></img>, "orange"],
    [<p>California Goldfields (Lasthenia californica)</p>, <img src="./public/assets/goldfields.jpg"></img>, "yellow"],
    [<p>Tidy Tips (Layia platyglossa)</p>, <img src="./public/assets/tidytips.jpg"></img>, "yellow"],
    [<p>Coyote brush (Baccharis pilularis)</p>, <img src="./public/assets/coyotebrush.webp"></img>, "green"],
    [<p>Baby Blue Eyes (Nemophila menziesii)</p>, <img src="./public/assets/babyblueeyes.webp"></img>, "blue"],
    [<p>Chia (Salvia hispanica)</p>, <img src="./public/assets/chia.webp"></img>, "blue"],
    [<p>Desert Lupine (Lupinus sparsiflorus)</p>, <img src="./public/assets/lupine.jpg"></img>, "purple"],
    [<p>Shooting Star (Dodecatheon species)</p>, <img src="./public/assets/shootingstar.webp"></img>, "purple"],
    [<p>Purple Owl's Clover (Castilleja exserta)</p>, <img src="./public/assets/clover.webp"></img>, "pink"],
    [<p>Farewell-to-Spring (Clarkia amoena)</p>, <img src="./public/assets/farewell.webp"></img>, "pink"],
    [<p>Ghost Flower (Mohavea confertiflora)</p>, <img src="./public/assets/ghost.jpg"></img>, "white"]
  ])

  const [cardsNum, setCardsNum] = useState(plants.length);
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const [input, setInput] = useState("");
  const [status, setStatus] = useState("");
  const checkAnswer = (e) => {
        e.preventDefault(); 
        let currPlant = plant[0].props.children;
        
        if (currPlant == input) {
            setStatus("correct");

            const newStreak = streak + 1;
            setStreak(newStreak);

            if (newStreak > longestStreak){
              setLongestStreak(newStreak);
            }
        }
        else{
            setStatus("wrong");
            setStreak(0);
        }
    }

  const shuffleCards = () => {
    for (var i = plants.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = plants[i];
      plants[i] = plants[j];
      plants[j] = temp;
    }

    setPlants([...plants])
    console.log(plants)
  }


  const nextCard = () => {
    if (index+1 < plants.length) {
      setIndex(index+1);
      setLast("")
      setFirst("")
    } else {
      setLast("end")
    }
  }

  const previousCard = () => {
    if (index-1 >= 0) {
      setIndex(index-1);
      setFirst("")
      setLast("")
    } else {
      setFirst("end")
    }
  }

  const flipCard = () => {
    side === 1 ? setSide(0) : setSide(1);
  }

  let plant = plants[index];
  let currentSide = plant[side];

  return (
    <div className="App">
      <div className="header">
        <h1>BOTANICAL BASICS</h1>
        <h3>Discover the Golden State's natural treasures, one card at a time!</h3>
        <div className="card-stats">
          <p>{`Number of cards: ${cardsNum}`}</p>
          <p>{`Current streak: ${streak}`}</p>
          <p>{`Longest streak: ${longestStreak}`}</p>
          <button className="shuffle-button" onClick={shuffleCards}>Shuffle</button>
        </div>
      </div>
      
      <div className="flip-card-container">
        <div className={`flip-card ${side === 0 ? 'flipped' : ''}`} onClick={flipCard}>
          <div className="flip-card-front">
            {plant[1]} {/* Text side */}
          </div>
          <div className={`flip-card-back ${plant[2]}`}>
              {plant[0]} {/* Image side */}
          </div>
        </div>
      </div>

      <br></br>
      <Guess input={input} setInput={setInput} status={status} checkAnswer={checkAnswer}></Guess>
      <div className="buttons">
        <button id={first} className="previous" onClick={previousCard}>←</button>
        <button id={last} className="next" onClick={nextCard}>→</button>
      </div>
    </div>
  )
}

export default App