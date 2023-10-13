import React from "react"

const Result = ({ score, onClickPlayAgain }) => {
  return (
    <div className="flexcol result-container">
      <div className="flexcol result-content-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-image"
        />
        <p>YOUR SCORE</p>
        <p>{score}</p>
        <button onClick={() => onClickPlayAgain()}>PLAY AGAIN</button>
      </div>
    </div>
  )
}

export default Result
