import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import Slider from "./component/Slider";
import StayCard from "./component/StayCard";

const List = [
  {
    title: "PROF. UKTAM UMURZAKOV",
    link: "visit website",
  },
  {
    title: "PROF. UKTAM UMURZAKOV",
    link: "visit website",
  },
  {
    title: "PROF. UKTAM UMURZAKOV",
    link: "visit website",
  },
  {
    title: "PROF. UKTAM UMURZAKOV",
    link: "visit website",
  },
  {
    title: "PROF. UKTAM UMURZAKOV",
    link: "visit website",
  },
  {
    title: "PROF. UKTAM UMURZAKOV",
    link: "visit website",
  },
];

function Stay() {
  return (
    <div className="papers">
      <SectionTitle id="venue" title="WHERE TO STAY" />
      <Slider slideList={List} view={3} spaceBetween={30} />
      <SectionTitle id="conference" title="WHERE TO STAY" />
      <StayCard />
    </div>
  );
}

export default Stay;
