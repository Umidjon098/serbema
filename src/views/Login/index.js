import { Button, Col, Form, message, Row } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginApi } from "../../api/Login";
import InputEmail from "../../components/Form/InputEmail";
import InputPassword from "../../components/Form/InputPassword";
import AntModal from "../../components/Modal";
import GetNewCode from "./GetNewCode";

function Login() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    LoginApi.create(values)
      .then((data) => {
        localStorage.setItem("refreshToken", data.refresh);
        localStorage.setItem("accessToken", data.access);
        navigate("/");
        setLoading(false);
        message.success("Successful");
      })
      .catch((error) => {
        message.error(error.response?.data?.detail);
        setLoading(false);
      });
  };

  return (
    <div className="login">
      <AntModal
        visible={visible}
        setVisible={setVisible}
        content={<GetNewCode />}
        title="Yangi kod olish!"
      />
      <Form onFinish={onFinish} autoComplete="off">
        <Row gutter={24}>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <InputEmail
              size={"large"}
              rules={[{ required: true }]}
              placeholder="E-mail"
              name="email"
            />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <InputPassword
              size={"large"}
              rules={[{ required: true }]}
              placeholder="Password"
              name="password"
            />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <Form.Item>
              <Button
                loading={loading}
                className="login-btn"
                size="large"
                htmlType="submit"
              >
                Login
              </Button>
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <div className="take-password">
              <Link to="/register">
                <span>Ro'yxatdan O'tish / </span>
              </Link>
              <span onClick={() => setVisible(true)}>
                Parolni unitdingizmi?
              </span>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Login;
