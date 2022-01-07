import React, { useState } from "react";
import AntModal from "../../../../components/Modal";
import { images } from "../../../../constants/images";
import MenuButton from "./component/MenuButton";

const menuList = ["submit paper", "program", "registration"];

const Banner = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="banner">
      <AntModal
        visible={visible}
        setVisible={setVisible}
        content={"bla bla bla vbla"}
      />
      <div className="img-banner">
        <img src={images.Banner} alt="" />
      </div>
      {/* <div className="banner-content">
        <div className="title">
          International Conference <br /> on Sustainable Management <br /> of
          Earth Resources and <br /> Biodiversity
        </div>
        <div className="date">
          <div className="month">october</div>
          <div className="day">14th - 16th 2022</div>
        </div>
        <div className="location">Uzbekistan, Tashkent</div>
      </div> */}
      <div className="button-box">
        {menuList.map((data) => (
          <MenuButton onClick={setVisible} text={data} />
        ))}
      </div>
    </div>
  );
};

export default Banner;
