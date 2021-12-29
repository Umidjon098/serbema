import React from "react";
import { Form, Input } from "antd";

const InputTextArea = ({
  label,
  name,
  rules,
  restField,
  fieldKey,
  required,
}) => {
  const { TextArea } = Input;

  return (
    <Form.Item
      {...restField}
      label={label}
      name={name}
      rules={rules}
      fieldKey={fieldKey}
      rules={[{ required: required }]}
    >
      <TextArea style={{ height: "40px" }} />
    </Form.Item>
  );
};

export default InputTextArea;
