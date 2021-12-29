import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import Slider from "./component/Slider";

const List = [
  {
    name: "PROF. UKTAM UMURZAKOV",
    proffesion: "Chairman, Professor, DSc,Rector of TIIAME",
  },
  {
    name: "PROF. UKTAM UMURZAKOV",
    proffesion: "Chairman, Professor, DSc,Rector of TIIAME",
  },
  {
    name: "PROF. UKTAM UMURZAKOV",
    proffesion: "Chairman, Professor, DSc,Rector of TIIAME",
  },
  {
    name: "PROF. UKTAM UMURZAKOV",
    proffesion: "Chairman, Professor, DSc,Rector of TIIAME",
  },
  {
    name: "PROF. UKTAM UMURZAKOV",
    proffesion: "Chairman, Professor, DSc,Rector of TIIAME",
  },
  {
    name: "PROF. UKTAM UMURZAKOV",
    proffesion: "Chairman, Professor, DSc,Rector of TIIAME",
  },
];

function Commitee() {
  return (
    <div className="commitee">
      <SectionTitle id="commite" title="Commitee" />
      <Slider slideList={List} view={4} spaceBetween={30} />
    </div>
  );
}

export default Commitee;
