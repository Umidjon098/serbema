import React from "react";
import { Row, Col } from "antd";
import IMage from "../../../../../assets/images/Banner.png";

export default function HonorableCard({ slideList = [] }) {
  return (
    <Row gutter={24}>
      {slideList.map((data) => (
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
          <div className="card-box">
            <div className="speak-card">
              <div className="left-box">
                <div className="img-box">
                  <img src={IMage} alt="" />
                </div>
              </div>
              <div className="right-box">
                <div className="proffesion">{data.proffesion}</div>
                <div className="defination">{data.name}</div>
                <div className="text">{data.text}</div>
                <div className="read-more">Read More</div>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}
