import React from "react";
import { Form, Input } from "antd";

const InputTextArea = ({ label, name, rules, restField, fieldKey }) => {
  const { TextArea } = Input;

  return (
    <Form.Item
      {...restField}
      label={label}
      name={name}
      rules={rules}
      fieldKey={fieldKey}
    >
      <TextArea style={{ height: "40px" }} />
    </Form.Item>
  );
};

export default InputTextArea;
