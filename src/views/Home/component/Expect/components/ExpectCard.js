import React from "react";

function ExpectCard({ List }) {
  return (
    <div className="expect-card">
      <div className="icon">
        <img src={List.icon} alt={""} />
      </div>
      <div className="text-content">
        <div className="title">{List.title}</div>
        <div className="description">{List.text}</div>
      </div>
    </div>
  );
}

export default ExpectCard;
