import React from "react";
import ExpectCard from "./components/ExpectCard";
import { Row, Col } from "antd";
import SectionTitle from "../../../../components/SectionTitle";

function Expect() {
  return (
    <div className="expect">
      <SectionTitle title="WHAT TO EXPECT" />
      <Row gutter={24}>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
          <ExpectCard />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
          <ExpectCard />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
          <ExpectCard />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
          <ExpectCard />
        </Col>
      </Row>
    </div>
  );
}

export default Expect;
