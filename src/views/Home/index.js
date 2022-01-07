import { BackTop } from "antd";
import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Banner from "./component/Banner";
import Commitee from "./component/Commitee";
import Contact from "./component/Contact";
import Counter from "./component/Counter";
import Expect from "./component/Expect";
import Footer from "./component/Footer";
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
      <Counter />
      <Commitee />
      <Speakers />
      <Schedule />
      <Expect />
      <Papers />
      <Stay />
      <Footer />
      <Contact />
    </div>
  );
};

export default Home;
