import React, { useState } from "react";
import Scoreboard from "./Scoreboard";
import Pick from "./Pick";
import Result from "./Result";
import Rules from "./Rules";

function App() {
  const [score, setScore] = useState(0);
  const [selection, setSelection] = useState("");
  const [compWeapon, setCompWeapon] = useState("");

  function onPick(weaponChosen) {
    setSelection(weaponChosen);
  }

  function updateScore(result, compPick) {
    setScore(score + result);
    setCompWeapon(compPick);
  }

  function newGame(result) {
    setSelection("");
    setCompWeapon("");
  }

  return (
    <div>
      <Scoreboard score={score} />
      <div className="game">
        {!selection ? (
          <Pick onPick={onPick} />
        ) : (
          <Result
            compPick={compWeapon}
            userPick={selection}
            updateScore={updateScore}
            newGame={newGame}
          />
        )}
      </div>
      <Rules />
    </div>
  );
}

export default App;
