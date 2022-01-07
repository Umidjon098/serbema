import React from "react";
import ExpectCard from "./components/ExpectCard";
import { Row, Col } from "antd";
import SectionTitle from "../../../../components/SectionTitle";
import { images } from "../../../../constants/images";

function Expect() {
  const dataList = [
    {
      icon: images.List,
      title: "Publication on the frame of the conference ",
      text: "All accepted and presented papers of the 1st International Conference on Sustainable Management of Earth Resources and Biodiversity SERBEMA-2022 will be submitted for publication in open access E3S Web of Conferences, American Institute of Physics AIP Conference Proceedings, and IOP Conference Series: Earth and Environmental Science journals indexed in SCOPUS and/or Web of Science.",
    },
    {
      icon: images.List,
      title: "Local student event on the frame of the conference",
      text: "All accepted and presented papers of the 1st International Conference on Sustainable Management of Earth Resources and Biodiversity SERBEMA-2022 will be submitted for publication in open access E3S Web of Conferences, American Institute of Physics AIP Conference Proceedings, and IOP Conference Series: Earth and Environmental Science journals indexed in SCOPUS and/or Web of Science.",
    },
    {
      icon: images.List,
      title:
        "Photo contest on the frame of the conference(*only locals are eligible to participate)",
      text: "",
    },
    {
      icon: images.List,
      title: "Contest on the frame of the conference(By IFODA)",
      text: "",
    },
  ];
  return (
    <div className="expect">
      <SectionTitle title="WHAT TO EXPECT" />
      <Row gutter={24}>
        {dataList.map((data) => (
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <ExpectCard List={data} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Expect;
