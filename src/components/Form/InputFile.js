import React from "react";
import { Form, Input } from "antd";

const InputFile = ({
  label,
  name,
  rules,
  restField,
  fieldKey,
  suffix = "",
}) => {
  return (
    <Form.Item {...restField} label={label} name={name} fieldKey={fieldKey}>
      <Input type="file" suffix={suffix} />
    </Form.Item>
  );
};

export default InputFile;
