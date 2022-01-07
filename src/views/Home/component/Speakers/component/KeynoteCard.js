import React from "react";
import { Row, Col } from "antd";

export default function KeynoteCard({ slideList = [] }) {
  return (
    <Row gutter={24}>
      {slideList.map((data) => (
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
          <div className="card-box">
            <div className="keynote-card">
              <div className="img-box">
                <img src={data.img} alt="" />
              </div>
              <div className="name">{data.name}</div>
              <div className="proffesion">{data.proffesion}</div>
              <div className="country">{data.country}</div>
              <div className="university">{data.university}</div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}
