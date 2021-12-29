import React from "react";

export default function MenuButton({ text, onClick }) {
  return (
    <div onClick={onClick} className="menu-button">
      {text}
    </div>
  );
}
