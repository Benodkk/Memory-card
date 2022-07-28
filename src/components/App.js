import React, { useState } from "react";
import GenerateCards from './GenerateCards'

function App() {


  const [score, setScore] = useState(0)
  const [highscore, setHighscore] = useState(0)
  const [chosenCards, setCards] = useState([])
  
  const choosenCard = () => {
    let chosenCard 
    if(chosenCards.some(x => x == chosenCard) == true ){
      setScore(0)
      setCards([])
    }
    else {
      // setCards(chosenCards.push(card)),
      setScore(score+1)
    }

    if(score>highscore){
      setHighscore(score)
    }

  }
  const srom = (e) => {
    let nr = e.target.getAttribute('id')
    console.log(nr)
    // console.log(e.target.value)
  }

  return (
    <div>
      <GenerateCards choosenCard={srom}/>
    </div>
  );
}

export default App;
