import { Button, Col, Form, Row, message } from "antd";
import React, { useContext } from "react";
import InputEmail from "../../components/Form/InputEmail";
import InputText from "../../components/Form/InputText";
import RegBanner from "./regBanner";
import VarificationCode from "./varificationCode";
import { RegisterApi } from "../../api/Register";
import { MainContext } from "../../context/MainContext";

function Register() {
  const { setUserData } = useContext(MainContext);

  const onFinish = (values) => {
    RegisterApi.create(values)
      .then((data) => {
        setUserData(data);
        message.success("Muaffaqiyatli amalga oshirildi.");
        message.success("E-mailingizga tasdiqlash ko'di yuborildi.");
      })
      .catch(() => {
        message.error("Jarayon Muaffaqiyatsiz yakunlandi.");
      });
  };

  return (
    <div className="register">
      <RegBanner />
      <div className="reg-title">Ro’yxatdan o’tish / Sign up</div>
      <Form onFinish={onFinish} autoComplete="off">
        <Row gutter={24}>
          <Col span={10} offset={7}>
            <InputText
              size={"large"}
              required={true}
              placeholder="Ism / First Name"
              name="first_name"
            />
          </Col>
          <Col span={10} offset={7}>
            <InputText
              size={"large"}
              required={true}
              placeholder="Familya / Last Name"
              name="last_name"
            />
          </Col>
          <Col span={10} offset={7}>
            <InputText
              size={"large"}
              required={true}
              placeholder="Tashkilot / Affiliation"
              name="affiliation"
            />
          </Col>
          <Col span={10} offset={7}>
            <InputText
              size={"large"}
              required={true}
              placeholder="Mamlakat / Country"
              name="country"
            />
          </Col>
          <Col span={10} offset={7}>
            <InputEmail
              size={"large"}
              required={true}
              placeholder="E-mail"
              name="email"
            />
          </Col>
          <Col span={10} offset={7}>
            <Form.Item>
              <Button size="large" type="primary" htmlType="submit">
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
