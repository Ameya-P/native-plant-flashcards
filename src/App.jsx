import './App.css';
import { useState } from 'react';

const App = () => {
  const [index, setIndex] = useState(0);
  const [side, setSide] = useState(1);

  let plants = [
    [<p>Indian Paintbrush (Castilleja species)</p>, <img src="./src/assets/indianpaintbrush.jpg"></img>],
    [<p>California Poppy (Eschscholzia californica)</p>, <img src="./src/assets/poppy.jpg"></img>],
    [<p>California Goldfields (Lasthenia californica)</p>, <img src="./src/assets/goldfields.jpg"></img>],
    [<p>Tidy Tips (Layia platyglossa)</p>, <img src="./src/assets/tidytips.jpg"></img>],
    [<p>Coyote brush (Baccharis pilularis)</p>, <img src="./src/assets/coyotebrush.webp"></img>],
    [<p>Baby Blue Eyes (Nemophila menziesii)</p>, <img src="./src/assets/babyblueeyes.webp"></img>],
    [<p>Chia (Salvia hispanica)</p>, <img src="./src/assets/chia.webp"></img>],
    [<p>Desert Lupine (Lupinus sparsiflorus)</p>, <img src="./src/assets/lupine.jpg"></img>],
    [<p>Purple Owl's Clover (Castilleja exserta)</p>, <img src="./src/assets/clover.webp"></img>],
    [<p>Farewell-to-Spring (Clarkia amoena)</p>, <img src="./src/assets/farewell.webp"></img>],
    [<p>Shooting Star (Dodecatheon species)</p>, <img src="./src/assets/shootingstar.webp"></img>],
    [<p>Ghost Flower (Mohavea confertiflora)</p>, <img src="./src/assets/ghost.jpg"></img>]
  ];

  const [cards, setCards] = useState(plants.length);

  const nextCard = () => {
    if (index+1 < plants.length) {
      setIndex(index+1);
    }
  }

  const previousCard = () => {
    if (index-1 >= 0) {
      setIndex(index-1);
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
        <em>Discover the Golden State's natural treasures, one card at a time!</em>
        <p><strong>Number of cards:</strong> {cards}</p>
      </div>
      
      <div className="flip-card-container">
        <div className={`flip-card ${side === 0 ? 'flipped' : ''}`} onClick={flipCard}>
          <div className="flip-card-front">
            {plant[1]} {/* Text side */}
          </div>
          <div className="flip-card-back">
              {plant[0]} {/* Image side */}
          </div>
        </div>
      </div>

      <br></br>
      <div className="buttons">
        <button className="previous" onClick={previousCard}>←</button>
        <button className="next" onClick={nextCard}>→</button>
      </div>
    </div>
  )
}

export default App