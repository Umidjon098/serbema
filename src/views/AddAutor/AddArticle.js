import React from "react";
import { Col, Row } from "antd";
import InputText from "../../components/Form/InputText";

function AddArticle() {
  return (
    <div>
      <Row gutter={24}>
        <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
          <InputText
            size={"large"}
            required={true}
            placeholder="Maqolaning nomi / Title*"
            name="title"
          />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
          <InputText
            size={"large"}
            required={true}
            placeholder="Kalit so’zlar / Key words (max: 5)*"
            name="keywords"
          />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
          <InputText
            size={"large"}
            required={true}
            placeholder="Sho’ba / Section"
            name="section"
          />
        </Col>
      </Row>
    </div>
  );
}

export default AddArticle;
