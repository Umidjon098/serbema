import React, { useState } from "react";
import { Button, Col, Form, Row } from "antd";
import InputEmail from "../../components/Form/InputEmail";
import { getNewCodeApi } from "../../api/GetNewCode";
import Loading from "../../components/Loading";

function GetNewCode() {
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    getNewCodeApi
      .create(values)
      .then((data) => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {loading && <Loading />}
      <Form onFinish={onFinish} autoComplete="off">
        <Row gutter={24}>
          <Col span={24}>
            <InputEmail
              size={"large"}
              rules={[{ required: true }]}
              placeholder="E-mail"
              name="email"
            />
          </Col>
          <Col span={24}>
            <Form.Item>
              <Button loading={loading} size="large" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default GetNewCode;
