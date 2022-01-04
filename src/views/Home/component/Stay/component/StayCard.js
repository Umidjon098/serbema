import { Col, Row } from "antd";
import React from "react";

function StayCard() {
  return (
    <Row gutter={24}>
      <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
        <div className="card-box">
          <div className="stay-card">
            <div className="title">FOR ACADEMICS</div>
            <div className="price">
              <div className="current-price">180$</div>
              <div className="old-price">200$</div>
            </div>
            <div className="description">
              Early-Bird Registration Before 5 September 2021 - 200$ 180$ Late
              Registration After 5 September until 15 September 2021 - 250$ 200$
            </div>
            <div className="read-more">READ MORE</div>
          </div>
        </div>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
        <div className="card-box">
          <div className="stay-card">
            <div className="title">FOR ACADEMICS</div>
            <div className="price">
              <div className="current-price">180$</div>
              <div className="old-price">200$</div>
            </div>
            <div className="description">
              Early-Bird Registration Before 5 September 2021 - 200$ 180$ Late
              Registration After 5 September until 15 September 2021 - 250$ 200$
            </div>
            <div className="read-more">READ MORE</div>
          </div>
        </div>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
        <div className="card-box">
          <div className="stay-card">
            <div className="title">FOR ACADEMICS</div>
            <div className="price">
              <div className="current-price">180$</div>
              <div className="old-price">200$</div>
            </div>
            <div className="description">
              Early-Bird Registration Before 5 September 2021 - 200$ 180$ Late
              Registration After 5 September until 15 September 2021 - 250$ 200$
            </div>
            <div className="read-more">READ MORE</div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default StayCard;
