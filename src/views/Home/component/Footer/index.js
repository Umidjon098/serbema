import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import { images } from "../../../../constants/images";
import Slider from "./component/Slider";

const List = [
  {
    link: "https://www.tuproqtahlil.uz/",
    img: images.Soil,
  },
  {
    link: "https://www.agro.uz/",
    img: images.Agrouz,
  },
  {
    link: "http://akis.agro.uz/uz",
    img: images.Akis,
  },
  {
    link: "https://www.fao.org/home/en",
    img: images.Food,
  },
  {
    link: "http://ifoda.uz/en",
    img: images.Ifoda,
  },
  {
    link: "https://nuu.uz/en/",
    img: images.Nuu,
  },
  {
    link: "https://tdau.uz/",
    img: images.Tdau,
  },
  {
    link: "www.tuat.ac.jp",
    img: images.Tokyo,
  },
  {
    link: "http://www.unizg.hr/homepage/",
    img: images.Zagreb,
  },
];

function Footer() {
  return (
    <div className="papers">
      <SectionTitle id="contribution" title="Partners" />
      <Slider slideList={List} view={6} spaceBetween={30} />
    </div>
  );
}

export default Footer;
