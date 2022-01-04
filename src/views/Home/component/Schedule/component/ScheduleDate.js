import React, { useState } from "react";

function ScheduleDate() {
  const [active, setActive] = useState(0);
  const handleActive = (id) => {
    setActive(id);
  };
  const dateList = ["THE SCHEDULE", "14.10.2022", "14.10.2022", "14.10.2022"];
  return (
    <div className="schedule-date">
      {dateList.map((data, id) => (
        <div
          className={active === id ? "date active" : "date"}
          onClick={() => handleActive(id)}
        >
          {data}
        </div>
      ))}
    </div>
  );
}

export default ScheduleDate;
