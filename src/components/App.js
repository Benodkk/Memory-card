import React, { useState } from "react";
import GenerateCards from './GenerateCards'

function App() {


  const [score, setScore] = useState(0)
  const [highscore, setHighscore] = useState(0)
  const [chosenCards, setCards] = useState([])
  
  const chosenCard = (e) => {
    let chsenCard = e.target.getAttribute('id')
    setCards(chosenCards.concat(chsenCard))
    if(chosenCards.some(x => x == chsenCard) == true ){
      setScore(0)
      setCards([])
      if(score>highscore){
        setHighscore(score)
      }
    }
    else {
      setCards(chosenCards.concat(chsenCard))
      setScore(score+1)
    }

    // if(score>highscore){
    //   setHighscore(score)
    // }
    console.log(chosenCards)
    console.log(score)
    console.log(highscore)
  }

  return (
    <div className="content">
      <div className="header">
        <div className="title">LOTR Memory Game</div>
        <div className="right">
          <div>Score:{score}</div>
          <div>Highscore:{highscore}</div>
        </div>
      </div>
      <GenerateCards chosenCard={chosenCard}/>
    </div>
  );
}

export default App;
