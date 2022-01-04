import { Button, Col, Form, Row, message } from "antd";
import React, { useContext, useState } from "react";
import InputEmail from "../../components/Form/InputEmail";
import InputText from "../../components/Form/InputText";
import RegBanner from "./regBanner";
import VarificationCode from "./varificationCode";
import { RegisterApi } from "../../api/Register";
import { MainContext } from "../../context/MainContext";

function Register() {
  const { setUserData } = useContext(MainContext);
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    RegisterApi.create(values)
      .then((data) => {
        setUserData(data);
        message.success("Muaffaqiyatli amalga oshirildi.");
        message.success("E-mailingizga tasdiqlash ko'di yuborildi.");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        message.error("Jarayon Muaffaqiyatsiz yakunlandi.");
        setLoading(false);
      });
  };

  return (
    <div className="register">
      <RegBanner />
      <div className="reg-title">Ro’yxatdan o’tish / Sign up</div>
      <Form onFinish={onFinish} autoComplete="off">
        <Row gutter={24}>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <InputText
              size={"large"}
              rules={[{ required: true }]}
              placeholder="Ism / First Name"
              name="first_name"
            />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <InputText
              size={"large"}
              rules={[{ required: true }]}
              placeholder="Familya / Last Name"
              name="last_name"
            />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <InputText
              size={"large"}
              rules={[{ required: true }]}
              placeholder="Tashkilot / Affiliation"
              name="affiliation"
            />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <InputText
              size={"large"}
              rules={[{ required: true }]}
              placeholder="Mamlakat / Country"
              name="country"
            />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <InputEmail
              size={"large"}
              rules={[{ required: true }]}
              placeholder="E-mail"
              name="email"
            />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <Form.Item>
              <Button
                loading={loading}
                size="large"
                type="primary"
                htmlType="submit"
              >
                Ro’yxatdan o’tish / Sign up
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <VarificationCode />
    </div>
  );
}

export default Register;
