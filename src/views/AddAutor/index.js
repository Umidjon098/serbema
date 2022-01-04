import React from "react";
import InputEmail from "../../components/Form/InputEmail";
import InputText from "../../components/Form/InputText";
import { Form, Button, Col, Row, Upload } from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import AddArticle from "./AddArticle";
import { Article } from "../../api/Article";
import InputFile from "../../components/Form/InputFile";

function AddAutor() {
  const formData = new FormData();

  const [form] = Form.useForm();
  function getFormData(object) {
    Object.keys(object).forEach((key) => {
      if (typeof object[key] !== "object") {
        formData.append(key, object[key]);
      } else {
        formData.append(key, JSON.stringify(object[key]));
      }
    });
    return formData;
  }
  const handleFile = (file) => {
    formData.append("file", file);
  };
  const onFinish = (values) => {
    Article.create(getFormData(values))
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="register">
      <div className="reg-title">
        Muallif haqida ma’lumotlar / autor information
      </div>
      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
        form={form}
      >
        <Form.List name="authors">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Row gutter={24} key={key}>
                  <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
                    <InputText
                      size={"large"}
                      required={true}
                      placeholder="Ism / First Name"
                      {...restField}
                      name={[name, "first_name"]}
                      fieldKey={[fieldKey, "first_name"]}
                      rules={[
                        { required: true, message: "Missing first_name name" },
                      ]}
                    />
                  </Col>
                  <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
                    <InputText
                      size={"large"}
                      required={true}
                      placeholder="Familya / Last Name"
                      {...restField}
                      name={[name, "last_name"]}
                      fieldKey={[fieldKey, "last_name"]}
                      rules={[
                        { required: true, message: "Missing last_name name" },
                      ]}
                    />
                  </Col>
                  <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
                    <InputText
                      size={"large"}
                      required={true}
                      placeholder="Tashkilot / Affiliation"
                      {...restField}
                      name={[name, "affiliation"]}
                      fieldKey={[fieldKey, "affiliation"]}
                      rules={[
                        { required: true, message: "Missing affiliation name" },
                      ]}
                    />
                  </Col>
                  <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
                    <InputText
                      size={"large"}
                      required={true}
                      placeholder="Mamlakat / Country"
                      {...restField}
                      name={[name, "country"]}
                      fieldKey={[fieldKey, "country"]}
                      rules={[
                        { required: true, message: "Missing country name" },
                      ]}
                    />
                  </Col>
                  <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
                    <InputEmail
                      size={"large"}
                      required={true}
                      placeholder="E-mail"
                      {...restField}
                      name={[name, "email"]}
                      fieldKey={[fieldKey, "email"]}
                      rules={[
                        { required: true, message: "Missing email name" },
                      ]}
                    />
                  </Col>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Row>
              ))}
              <Row gutter={24}>
                <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add Author / Muallif qo’shish
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </>
          )}
        </Form.List>
        <AddArticle />
        <Row gutter={24}>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <InputFile onChange={(e) => handleFile(e.target.files[0])} />
            {/* <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload> */}
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default AddAutor;
