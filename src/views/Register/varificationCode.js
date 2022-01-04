import { Button, Col, Form, Row, message } from "antd";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../../api/Login";
import InputPassword from "../../components/Form/InputPassword";
import { MainContext } from "../../context/MainContext";

function VarificationCode() {
  const { userData } = useContext(MainContext);
  const navigate = useNavigate();
  let value = {};
  const onFinish = (values) => {
    value = {
      password: values.password,
      email: userData.email,
    };
    LoginApi.create(value)
      .then(() => {
        message.success("Registratsiyadan muaffaqiyatli o’tdingiz / success");
        navigate("/");
      })
      .catch((error) => {
        message.error(error.response?.data?.detail);
      });
  };

  return (
    <div className="varification">
      <Form onFinish={onFinish} autoComplete="off">
        <Row gutter={24}>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <InputPassword
              size="large"
              placeholder="Tasdiqlovchi kod / Verfication code "
              rules={[{ required: true }]}
              name="password"
            />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <Form.Item>
              <Button size="large" type="primary" htmlType="submit">
                Yuborish / Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default VarificationCode;
