import React from "react";
import Countdown from "react-countdown";
import SectionTitle from "../../../../components/SectionTitle";
const Completionist = () => <span>You are good to go!</span>;
function Counter() {
  return (
    <div className="counter">
      <SectionTitle title="EVENT WILL START IN" />
      <Countdown className="count-down" date={Date.now() + 5000000000}>
        <Completionist />
      </Countdown>
    </div>
  );
}

export default Counter;
