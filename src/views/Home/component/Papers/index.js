import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import Slider from "./component/Slider";

const List = [
  {
    title: "Agricultural Engineering",
  },
  {
    title: "Agricultural Engineering",
  },
  {
    title: "Agricultural Engineering",
  },
  {
    title: "Agricultural Engineering",
  },
  {
    title: "Agricultural Engineering",
  },
  {
    title: "Agricultural Engineering",
  },
];

function Papers() {
  return (
    <div className="papers">
      <SectionTitle id="contribution" title="CALL FOR PAPERS" />
      <Slider slideList={List} view={3} spaceBetween={30} />
    </div>
  );
}

export default Papers;
