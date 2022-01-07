import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import { images } from "../../../../constants/images";
import Slider from "./component/Slider";
import StayCard from "./component/StayCard";

const List = [
  {
    title: "International Hotel Tashkent",
    link: "https://ihthotel.uz/ru/rooms/",
    img: images.Ihthotel,
  },
  {
    title: "Hyatt Regency",
    link: "https://www.hyatt.com/en-US/hotel/uzbekistan/hyatt-regency-tashkent/tasrt/rooms",
    img: images.Hyyat,
  },
  {
    title: "Hilton Tashkent City",
    link: "https://www.hilton.com/en/hotels/tastchi-hilton-tashkent-city/?WT.mc_id=zCBEC0UZ1HI2NaturalSearch3Google_LGHotelListing4DGGeneric_5LocalSearch6TASTCHI7EN8i92330",
    img: images.Hilton5,
  },
  {
    title: "COURTYARD TASHKENT",
    link: "https://www.marriott.com/hotels/hotel-rooms/tascy-courtyard-tashkent/",
    img: images.Marriot,
  },
  {
    title: "Hampton by Hilton Tashkent",
    link: "https://www.hilton.com/en/hotels/tastuhx-hampton-tashkent/rooms/",
    img: images.Hilton4,
  },
  {
    title: "Shoxjahon Hotel ",
    link: "https://101hotels.com/uzbekistan/tashkent/shoxjahon_hotel.html",
    img: images.Hotel101,
  },
  {
    title: "Lumiere Hotel & Spa",
    link: "https://lumiere.uz/about-lumiere/",
    img: images.Lumiere,
  },
  {
    title: "Praga Hotel",
    link: "http://pragahotel.uz/en/",
    img: images.Pragahotel,
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
