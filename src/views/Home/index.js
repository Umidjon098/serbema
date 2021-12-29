import { BackTop } from "antd";
import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Banner from "./component/Banner";
import Commitee from "./component/Commitee";
import Contact from "./component/Contact";
import Expect from "./component/Expect";
import Papers from "./component/Papers";
import Schedule from "./component/Schedule";
import Speakers from "./component/Speakers";
import Stay from "./component/Stay";
export const Home = () => {
  return (
    <div>
      <BackTop />
      <Navbar />
      <Banner />
      <Commitee />
      <Speakers />
      <Schedule />
      <Expect />
      <Papers />
      <Stay />
      <Contact />
    </div>
  );
};

export default Home;
