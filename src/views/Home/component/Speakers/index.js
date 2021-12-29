import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import HonorableCard from "./component/HonorableCard";
import KeynoteCard from "./component/KeynoteCard";

const List = [
  {
    name: "Managing director CROM Center for Research on Microgrids Department of Energy Technology Aalborg University, Denmark",
    proffesion: "Chairman, Professor, DSc,Rector of TIIAME",
    text: "Scopus/Web of Science h-index: 95",
  },
  {
    name: "Managing director CROM Center for Research on Microgrids Department of Energy Technology Aalborg University, Denmark",
    proffesion: "Chairman, Professor, DSc,Rector of TIIAME",
    text: "Scopus/Web of Science h-index: 95",
  },
  {
    name: "Managing director CROM Center for Research on Microgrids Department of Energy Technology Aalborg University, Denmark",
    proffesion: "Chairman, Professor, DSc,Rector of TIIAME",
    text: "Scopus/Web of Science h-index: 95",
  },
  {
    name: "Managing director CROM Center for Research on Microgrids Department of Energy Technology Aalborg University, Denmark",
    proffesion: "Chairman, Professor, DSc,Rector of TIIAME",
    text: "Scopus/Web of Science h-index: 95",
  },
];
const List1 = [
  {
    name: "Prof. Obid Tursunov",
    proffesion:
      "Tashkent Institute of Irrigation and Agricultural Mechanization Engineers",
    country: "(Uzbekistan)",
    university: "Shanghai Jiao Tong University (China)",
  },
  {
    name: "Prof. Obid Tursunov",
    proffesion:
      "Tashkent Institute of Irrigation and Agricultural Mechanization Engineers",
    country: "(Uzbekistan)",
    university: "Shanghai Jiao Tong University (China)",
  },
  {
    name: "Prof. Obid Tursunov",
    proffesion:
      "Tashkent Institute of Irrigation and Agricultural Mechanization Engineers",
    country: "(Uzbekistan)",
    university: "Shanghai Jiao Tong University (China)",
  },
  {
    name: "Prof. Obid Tursunov",
    proffesion:
      "Tashkent Institute of Irrigation and Agricultural Mechanization Engineers",
    country: "(Uzbekistan)",
    university: "Shanghai Jiao Tong University (China)",
  },
  {
    name: "Prof. Obid Tursunov",
    proffesion:
      "Tashkent Institute of Irrigation and Agricultural Mechanization Engineers",
    country: "(Uzbekistan)",
    university: "Shanghai Jiao Tong University (China)",
  },
];
function Speakers() {
  return (
    <div className="speakers">
      <SectionTitle id="speakers" title={"HONORABLE SPEAKERS"} />
      <HonorableCard slideList={List} />
      <SectionTitle title={"KEYNOTE SPEAKERS"} />
      <KeynoteCard slideList={List1} />
    </div>
  );
}

export default Speakers;
