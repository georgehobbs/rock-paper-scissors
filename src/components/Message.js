import React from "react";

function Message(props) {
  let message;

  if ((props.result === 0)) {
    message = "IT'S A TIE";
  } else if ((props.result === 1)) {
    message = "YOU WIN";
  } else if ((props.result === -1)) {
    message = "YOU LOSE";
  }

  function playAgain() {
      props.newGame();
  }

  return (
    <div className="message">
      <h2>{message}</h2>
      <button className="play-again btn btn-primary" onClick={playAgain}>PLAY AGAIN</button>
    </div>
  );
}

export default Message;
