import React from "react"

const Navbar = ({ score, timer }) => {
  return (
    <div className="flexrow navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        className="logo"
        alt="website logo"
      />
      <div className="flexrow">
        <p>
          Score: <span className="highlight-text">{score}</span>
        </p>
        <div className="flexrow">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-icon"
          />
          <p className="highlight-text">{timer} sec</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
