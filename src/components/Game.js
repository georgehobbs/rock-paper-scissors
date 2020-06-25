import React, { useState } from "react";
import Pick from "./Pick";
import Result from "./Result";
import "./Game.css";

function Game(props) {
  const [selection, setSelection] = useState("");

  function onPick(weapon) {
    setSelection(weapon);
  }

  function updateScore(result) {
    props.refreshScore(result);
  }

  function newGame() {
    setSelection("");
  }

  return (
    <div className="game">
      {!selection ? (
        <Pick onPick={onPick} />
      ) : (
        <Result
          userPick={selection}
          compPick={Math.floor(Math.random() * 3)}
          updateScore={updateScore}
          newGame={newGame}
        />
      )}
    </div>
  );
}

export default Game;
