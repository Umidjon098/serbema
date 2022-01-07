import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import { images } from "../../../../constants/images";
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
    name: "Giorgi Ghambashidze",
    proffesion:
      "Agricultural University of Georgia · Division of Ecological Agriculture and Nature Conservation PhD in Agricultural Sciences",
    country: "Georgia",
    university: "Agricultural University of Georgia",
    img: images.Giorgi,
  },
  {
    name: "Horea Cacovean",
    proffesion:
      "OSPA UNIVERSITATEA DE STIINTE AGRICOLE SI MEDICINA VETERINARA CLUJ NAPOCA",
    country: "",
    university: "",
    img: images.Horea,
  },
  {
    name: "Rusu Teodor",
    proffesion:
      "University of Agricultural Sciences and Veterinary Medicine | USAMV Cluj · Department of Technical Sciences and Soil sciences Professor PhD.",
    country: "",
    university: "",
    img: images.Rusu,
  },
  {
    name: "Yoshiko Kawabata",
    proffesion:
      "Tokyo University of Agriculture and Technology | TUAT · Division of International Environmental and Agricultural Science PhD",
    country: "",
    university: "",
    img: images.Yoshiko,
  },
  {
    name: "Elena Shamrikova",
    proffesion: "Institute of Semiconductor Physics · soilscience",
    country: "",
    university: "",
    img: images.Elena,
  },
  {
    name: "Alisher Mirzabaev",
    proffesion:
      "University of Bonn | Uni Bonn · Center for Development Research PhD",
    country: "",
    university: "",
    img: images.Alisher,
  },
  {
    name: "Olena Dubovyk",
    proffesion:
      "University of Bonn | Uni Bonn · Center for Remote Sensing of Land Surfaces (ZFL) PhD (University of Bonn)",
    country: "",
    university: "",
    img: images.Olena,
  },
];
function Speakers() {
  return (
    <div className="speakers">
      <SectionTitle id="honorable" title={"HONORABLE SPEAKERS"} />
      <HonorableCard slideList={List} />
      <SectionTitle id="keynote" title={"KEYNOTE SPEAKERS"} />
      <KeynoteCard slideList={List1} />
    </div>
  );
}

export default Speakers;
