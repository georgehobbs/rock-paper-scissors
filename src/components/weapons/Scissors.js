import React from "react";

function Scissors(props) {
  return (
    <div>
      <div
        className="circle scissors"
        onClick={() => {
          props.onPick("scissors");
        }}
      >
        <img src="./images/icon-scissors.svg" alt="scissors" />
      </div>
    </div>
  );
}

export default Scissors;
