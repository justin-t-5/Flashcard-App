import { useState } from 'react'
import './App.css'
import {cardList} from './data.js'

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  let card = cardList[currentCard];
    function handlePreviousClick() {
    setCurrentCard(currentCard - 1);
  }

  function handleNextClick() {
    setCurrentCard(currentCard + 1);
  }

  return (
   <>
   <div className='container'>
      <h1>Web Dev Flash Quiz</h1>
      <h2>How well are we doing in Web Dev?</h2>
      <h2>Let's freshen up those skills with these flashcards.</h2>
      <h2>Number of Cards: 10</h2>
      <div className="flip-card" onClick={(e) => e.currentTarget.classList.toggle('flipped')}>
      <div className="flip-card-inner">
      <div className="flip-card-front">
        <p>{card.question}</p>
      </div>
      <div className="flip-card-back">
        <p>{card.answer}</p>
     </div>
     </div>
     </div>
     <div className='buttonContainer'>
        <button onClick={handlePreviousClick}>
        Previous
      </button>
      <button onClick={handleNextClick}>
        Next
      </button>
      </div>
         </div>
   </>
      

  )
}

export default App
