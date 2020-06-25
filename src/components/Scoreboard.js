import React from "react";
import "./Scoreboard.css";

function Scoreboard(props) {

  return (
    <div className="scoreboard">
      <div className="row justify-content-between">
        <div className="col col-4 title">
          <h3>ROCK</h3>
          <h3>PAPER</h3>
          <h3>SCISSORS</h3>
        </div>
        <div className="col col-4">
          <div className="white-box float-right">
            <h4>SCORE</h4>
            <h2>{props.score}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
