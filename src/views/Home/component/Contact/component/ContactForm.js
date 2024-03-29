import React, { useState } from "react";
import { Button, Col, Form, Row, message } from "antd";
import InputText from "../../../../../components/Form/InputText";
import PhoneNumber from "../../../../../components/Form/PhoneNumber";
import InputTextArea from "../../../../../components/Form/InputTextArea";
import { ContactApi } from "../../../../../api/Contact";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
    name: "${label} is not a valid name!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
function ContactForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    ContactApi.create(values)
      .then((data) => {
        form.resetFields();
        setLoading(false);
        message.success("Success");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        message.error("Error");
      });
  };
  return (
    <div className="contact-form">
      <div className="form-title">
        <div className="title">SEND US A MESSAGE</div>
        <div className="sub-title">
          If you have any questions, please contact us directly. We will respond
          for sure. Tashkent Institute of Irrigation and Agricultural
          Mechanization Engineers. Department of Power Supply and Renewable
          Energy Sources
        </div>
      </div>
      <div className="contact-form">
        <Form
          form={form}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Row gutter={24}>
            <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
              <InputText
                size="large"
                label={"Your name"}
                name="name"
                rules={[{ required: true }]}
              />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
              <InputText
                size="large"
                label={"Your email"}
                name="email"
                rules={[{ required: true }]}
              />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
              <PhoneNumber name="phone_number" rules={[{ required: true }]} />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
              <InputTextArea
                label={"Your message"}
                name="message"
                rules={[{ required: true }]}
              />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
              <Form.Item>
                <Button loading={loading} type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default ContactForm;
