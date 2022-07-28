import React, {  useState } from "react";
import uniqid from 'uniqid';
import '../css/GenerateCards.css'

function GenerateCards(props) {
  
  const {chosenCard} = props;

    // generate new cards after choosing one

    const newCards = () =>{
      let nums = ['c0','c1','c2','c3','c4','c5','c6','c7','c8','c9','c10','c11']
      let numbers = []
      let oneNum
      let oneCard
      let moko =[]
  
      for (let i=nums.length; i>0; i--){
        oneNum = Math.floor(Math.random()*(i))
        numbers.push(nums[oneNum])
        oneCard = <div
            id={nums[oneNum]}
            className='oneCard'
            onClick={() => {newCards()}}
        >
            </div>
        moko.push(oneCard)
        nums.splice(oneNum,1)

      }
      setCardo(moko)
      console.log(moko)
    }

    // initial cards

      const [cardo, setCardo] = useState([
      <div
      id={'c0'}
      className='oneCard'
      onClick={() => {newCards()}}>
      </div>,
      <div
      id={'c1'}
      className='oneCard'
      onClick={() => {newCards()}}>
      </div>,      
      <div
      id={'c2'}
      className='oneCard'
      onClick={() => {newCards()}}>
      </div>,
      <div
      id={'c3'}
      className='oneCard'
      onClick={() => {newCards()}}>
      </div>,
      <div
      id={'c4'}
      className='oneCard'
      onClick={() => {newCards()}}>
      </div>,
      <div
      id={'c5'}
      className='oneCard'
      onClick={() => {newCards()}}>
      </div>,      
      <div
      id={'c6'}
      className='oneCard'
      onClick={() => {newCards()}}>
      </div>,
      <div
      id={'c7'}
      className='oneCard'
      onClick={() => {newCards()}}>
      </div>,
        <div
      id={'c8'}
      className='oneCard'
      onClick={() => {newCards()}}>
      </div>,
      <div
      id={'c9'}
      className='oneCard'
      onClick={() => {newCards()}}>
      </div>,      
      <div
      id={'c10'}
      className='oneCard'
      onClick={() => {newCards()}}>
      </div>,
      <div
      id={'c11'}
      className='oneCard'
      onClick={() => {newCards()}}>
      </div>])
    
    return (
      <div className="cards">
          <div className="cardsContainer">{cardo.map((theOne) => {
              return <div className="oneCardContainer" key={uniqid()} onClick={chosenCard} >{theOne}</div>
          })}
          </div>
      </div>
    );
}
  
export default GenerateCards;