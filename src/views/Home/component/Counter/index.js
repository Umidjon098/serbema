import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { TimeApi } from "../../../../api/Time";
import SectionTitle from "../../../../components/SectionTitle";
const Completionist = () => (
  <div style={{ textAlign: "center" }}> You are good to go!</div>
);
function Counter() {
  const [time, setTime] = useState();

  useEffect(() => {
    TimeApi.get()
      .then((data) => {
        setTime(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!time) {
    return "";
  }

  return (
    <div className="counter">
      <SectionTitle title="EVENT WILL START IN" />
      <Countdown
        className="count-down"
        date={Date.now() + parseInt(time?.time)}
      >
        <Completionist />
      </Countdown>
    </div>
  );
}

export default Counter;
