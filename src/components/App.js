import React, { useState } from "react";
import Scoreboard from "./Scoreboard";
import Pick from "./Pick";
import Result from "./Result";
import Rules from "./Rules";

function App() {
  const [score, setScore] = useState(0);
  const [selection, setSelection] = useState("");

  function onPick(weaponChosen) {
    setSelection(weaponChosen);
  }

  // function updateScore(result) {
  //   setScore(score + result);
  // }

  function newGame(result) {
    setSelection("");
    setScore(score + result);
  }

  return (
    <div>
      <Scoreboard score={score} />
      <div className="game">
        {!selection ? (
          <Pick onPick={onPick} />
        ) : (
          <Result
            compPick={Math.floor(Math.random() * 3)}
            userPick={selection}
            // updateScore={updateScore}
            newGame={newGame}
          />
        )}
      </div>
      <Rules />
    </div>
  );
}

export default App;
