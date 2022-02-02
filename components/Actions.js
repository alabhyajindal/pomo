import React from "react";
import ActionButton from "./ActionButton";

function Actions() {
  return (
    <div className="flex gap-x-4 place-content-center">
      <ActionButton text="Start" color="#22c55e" />
      <ActionButton text="Stop" color="#f43f5e" />
      <ActionButton text="Reset" color="#e2e8f0" tcolor="#334155" />
    </div>
  );
}

export default Actions;
