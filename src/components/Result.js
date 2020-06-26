import React, { useState, useEffect } from "react";
import Rock from "./weapons/Rock";
import Paper from "./weapons/Paper";
import Scissors from "./weapons/Scissors";
import Message from "./Message";
import "./Game.css";

function Result(props) {
  const [result, setResult] = useState(null);
  const [showBoth, setShowBoth] = useState(false);
  let compPick = props.compPick;
  if (compPick === "") {
    compPick = Math.floor(Math.random() * 3);
  }

  useEffect(() => {
    setTimeout(function () {
      setShowBoth(true);
      updateWinner();
    }, 1000);
  }, []); // empty array as second argument prevents it running on every re-render.

  useEffect(() => {
    props.updateScore(result, compPick);
  }, [result]); // add result as a callback dependency means this runs whenever the result state changes

  const userPick = props.userPick;
  let userIcon = null;
  if (userPick === "rock") {
    userIcon = <Rock />;
  } else if (userPick === "paper") {
    userIcon = <Paper />;
  } else if (userPick === "scissors") {
    userIcon = <Scissors />;
  }

  function updateWinner() {
    setTimeout(function () {
      if (userPick === "scissors") {
        if (compPick == 2) {
          setResult(0);
        } else if (compPick == 0) {
          setResult(-1);
        } else if (compPick == 1) {
          setResult(1);
        }
      } else if (userPick === "rock") {
        if (compPick == 1) {
          setResult(-1);
        } else if (compPick == 0) {
          setResult(0);
        } else if (compPick == 2) {
          setResult(1);
        }
      } else if (userPick === "paper") {
        if (compPick == 1) {
          setResult(0);
        } else if (compPick == 2) {
          setResult(-1);
        } else if (compPick == 0) {
          setResult(1);
        }
      }
    }, 1000);
  }

  function newGame() {
    props.newGame(result);
  }

  return (
    <div className="result">
      <div className="row">
        <div className="result-circle col col-md-4 order-md-1 col-sm-6">
          <h3>YOU PICKED</h3>
          {userIcon}
        </div>
        <div className="result-circle col col-md-4 order-md-3 col-sm-6">
          <h3>THE HOUSE PICKED</h3>
          {showBoth && compPick === 0 && <Rock />}
          {showBoth && compPick === 1 && <Paper />}
          {showBoth && compPick === 2 && <Scissors />}
        </div>
        <div className="result-pick col col-md-4 order-md-2 col-sm-12">
          {result !== null && <Message result={result} newGame={newGame} />}
        </div>
      </div>
    </div>
  );
}

export default Result;
