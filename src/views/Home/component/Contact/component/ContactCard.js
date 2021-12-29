import React from "react";
import { CompassOutlined, MailOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
function ContactCard() {
  return (
    <div className="contact-card">
      <Row gutter={24}>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <div className="card-item">
            <div className="icon-box">
              <CompassOutlined style={{ fontSize: "50px", color: "#009900" }} />
            </div>
            <div className="text-box">
              <div className="title">ADDRESS</div>
              <div className="description">
                Tashkent Institute of Irrigation and Agricultural Mechanization
                Engineers, Department of Power Supply and Renewable Energy
                Sources. 39 Kari Niyazov street, Tashkent 100000, Uzbekistan
              </div>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <div className="card-item">
            <div className="icon-box">
              <MailOutlined style={{ fontSize: "50px", color: "#009900" }} />
            </div>
            <div className="text-box">
              <div className="title">CONTACT</div>
              <div className="description">
                icecae@tiiame.uz; <br /> icecae2020@gmail.com <br />
                o.tursunov@tiiame.uz
                <br /> +99871 237 19 36; <br /> +998 90 126 26 77
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ContactCard;
