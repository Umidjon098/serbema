import React from "react";

function SectionTitle({ title, id }) {
  return (
    <div id={id} className="section-title">
      {title}
    </div>
  );
}

export default SectionTitle;
