import { Button, Col, Form, Row, message } from "antd";
import React, { useContext } from "react";
import { LoginApi } from "../../api/Login";
import InputPassword from "../../components/Form/InputPassword";
import { MainContext } from "../../context/MainContext";

function VarificationCode() {
  const { userData } = useContext(MainContext);
  let value = {};
  const onFinish = (values) => {
    value = {
      password: values.password,
      email: userData.email,
    };
    LoginApi.create(value)
      .then(() => {
        message.success("Registratsiyadan muaffaqiyatli o’tdingiz / success");
      })
      .catch((error) => {
        console.log(error);
        message.error("Muaffaqiyatsiz urinish");
      });
  };

  return (
    <div className="varification">
      <Form onFinish={onFinish} autoComplete="off">
        <Row gutter={24}>
          <Col span={10} offset={7}>
            <InputPassword
              size="large"
              placeholder="Tasdiqlovchi kod / Verfication code "
              reuired={true}
              name="password"
            />
          </Col>
          <Col span={10} offset={7}>
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
