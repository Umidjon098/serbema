import React, { useContext } from "react";
import InputEmail from "../../components/Form/InputEmail";
import InputText from "../../components/Form/InputText";
import { Form, Button, Col, Row } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import AddArticle from "./AddArticle";
import UploadFile from "../../components/Upload/UploadFile";
import { MainContext } from "../../context/MainContext";

function AddAutor() {
  const { dataList } = useContext(MainContext);

  const onFinish = (values) => {
    console.log("Success:", values);
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
      >
        <Form.List name="authors">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Row gutter={24} key={key}>
                  <Col span={10} offset={7}>
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
                  <Col span={10} offset={7}>
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
                  <Col span={10} offset={7}>
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
                  <Col span={10} offset={7}>
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
                  <Col span={10} offset={7}>
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
                <Col span={10} offset={7}>
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
          <Col span={10} offset={7}>
            <Form.Item name="file">
              <UploadFile />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={10} offset={7}>
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
