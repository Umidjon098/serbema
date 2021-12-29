import React from "react";
import { Button, Col, Form, Row } from "antd";
import InputText from "../../components/Form/InputText";

function AddArticle() {
  return (
    <div>
      <Row gutter={24}>
        <Col span={10} offset={7}>
          <InputText
            size={"large"}
            required={true}
            placeholder="Maqolaning nomi / Title*"
            name="title"
          />
        </Col>
        <Col span={10} offset={7}>
          <InputText
            size={"large"}
            required={true}
            placeholder="Kalit so’zlar / Key words (max: 5)*"
            name="keywords"
          />
        </Col>
        <Col span={10} offset={7}>
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
