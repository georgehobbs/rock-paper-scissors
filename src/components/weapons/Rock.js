import React from "react";

function Rock(props) {
  return (
    <div>
      <div
        className="circle rock"
        onClick={() => {
          props.onPick("rock");
        }}
      >
        <img src="./images/icon-rock.svg" alt="rock" />
      </div>
    </div>
  );
}

export default Rock;
