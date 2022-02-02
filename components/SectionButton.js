import React from "react";

function SectionButton({ text }) {
  return (
    <div>
      <button className="text-white bg-sky-500 hover:bg-sky-600 p-2 mt-4 rounded-sm">
        {text}
      </button>
    </div>
  );
}

export default SectionButton;
