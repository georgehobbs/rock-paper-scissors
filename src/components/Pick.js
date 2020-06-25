import React from "react";
import Rock from "./weapons/Rock";
import Paper from "./weapons/Paper";
import Scissors from "./weapons/Scissors";
import "./Game.css";

function Pick(props) {

  function onPick(weapon) {
    props.onPick(weapon);
  }

  return (
    <div className="pick">
      <div className="row justify-content-center">
        <Paper onPick={onPick} />
        <Scissors onPick={onPick} />
      </div>
      <div className="row justify-content-center">
        <Rock onPick={onPick} />
      </div>
    </div>
  );
}

export default Pick;
