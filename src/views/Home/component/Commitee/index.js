import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import { images } from "../../../../constants/images";
import Slider from "./component/Slider";

const List = [
  {
    name: "(UZBEKISTAN) Egamberdieva Dilfuza",
    proffesion:
      "National University of Uzbekistan, Joint Uzbek-China Key Lab of EcoBiome, Tashkent, Uzbekistan ",
    img: images.Dilfuza,
  },
  {
    name: "(UZBEKISTAN) Ro‘zmetov Maqsud Ismoilovich ",
    proffesion: "Deputy Minister of Agriculture of the Republic of Uzbekistan",
    img: images.Maqsud,
  },
  {
    name: "(Croatia) Marija Romic",
    proffesion: "University of Zagreb · Department of Soil Amelioration PhD",
    img: images.Marija,
  },
  {
    name: "(Japan) Keisuke Katsura",
    proffesion:
      "Tokyo University of Agriculture and Technology | TUAT · Graduate School of Agriculture Doctor of Philosophy",
    img: images.Katsura,
  },
  {
    name: "Aziz Israilovich Nurbekov ",
    proffesion:
      "Tashkent State Agrarian University · Department of Plant Science Professor",
    img: images.Aziz,
  },
  {
    name: "Zafarjon Jabbarov ",
    proffesion:
      "National University of Uzbekistan · Department of Soil Science Professor, Doctor of science, PhD. Ing.",
    img: images.Zafarjon,
  },
  {
    name: "Komiljon Tojiboyev",
    proffesion:
      "Director of the Institute of Botany of the Academy of Sciences of Uzbekistan, Doctor of Biological Sciences, Academician",
    img: images.Komiljon,
  },
  {
    name: "Tokhtasin Abdrakhmanov",
    proffesion:
      "National University of Uzbekistan · Department of Biology Professor",
    img: images.Tukhtasin,
  },
  {
    name: "Tulkin Shamsiddinov ",
    proffesion: "Tashkent State Agrarian University Scientific department",
    img: images.Tulkin,
  },
  {
    name: "Jabborov Odil Abdimalikovich",
    proffesion:
      "General director of “Soil composition and repository, quality analysis centre” the state unitary enterprise",
    img: images.NoImg,
  },
  {
    name: "A.Q.Mirzmahmudov (IFODA)",
    proffesion: "",
    img: images.NoImg,
  },
  {
    name: "Shovkat Kholdorov",
    proffesion:
      "Tokyo University of Agriculture and Technology | TUAT · Graduate School of Agriculture Master of Soil Science",
    img: images.Shovkat,
  },
  {
    name: "Sayidjakhon Khasanov",
    proffesion:
      "Tashkent Institute of Irrigation and Agricultural Mechanization Engineers · Department of Geodesy and Geoinformatics Master of Science",
    img: images.Sayidjakhon,
  },
  {
    name: " Ilhomjon Aslanov",
    proffesion:
      "Tashkent Institute of Irrigation and Melioration · Depatment of Geodesy and Geoinformatics PhD (candidate)",
    img: images.Ilhomjon,
  },
  {
    name: "Bobur Aka  (IFODA)",
    proffesion: "",
    img: images.NoImg,
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
