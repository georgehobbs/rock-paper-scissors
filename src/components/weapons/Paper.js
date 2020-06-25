import React from "react";

function Paper(props) {
  return (
    <div>
      <div
        className="circle paper"
        onClick={() => {
          props.onPick("paper");
        }}
      >
        <img src="./images/icon-paper.svg" alt="paper" />
      </div>
    </div>
  );
}

export default Paper;
