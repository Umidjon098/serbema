import { Button, Col, Form, Row } from "antd";
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
      })
      .catch((error) => {
        console.log(error);
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
          <Col span={10} offset={7}>
            <InputEmail
              size={"large"}
              required={true}
              placeholder="E-mail"
              name="email"
            />
          </Col>
          <Col span={10} offset={7}>
            <InputPassword
              size={"large"}
              required={true}
              placeholder="Password"
              name="password"
            />
          </Col>
          <Col span={10} offset={7}>
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
          <Col span={10} offset={7}>
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
