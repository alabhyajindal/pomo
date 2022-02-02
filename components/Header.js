import React from "react";
import SectionButton from "./SectionButton";

function Header() {
  return (
    <div className="flex gap-x-4 place-content-center">
      <SectionButton text="Pomodoro" />
      <SectionButton text="Short Break" />
      <SectionButton text="Long Break" />
    </div>
  );
}

export default Header;
