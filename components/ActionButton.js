import React from "react";

function ActionButton({ text, color, tcolor = "#fff" }) {
  function handleClick() {
    console.log("click");
  }
  return (
    <div>
      <button
        className="p-2 rounded-sm px-4"
        style={{ backgroundColor: color, color: tcolor }}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
}

export default ActionButton;
