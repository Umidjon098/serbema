import React from "react";
import { Form, Input } from "antd";

const InputFile = ({
  label,
  name,
  rules,
  restField,
  fieldKey,
  suffix = "",
  onChange,
}) => {
  return (
    <Form.Item
      {...restField}
      label={label}
      name={name}
      fieldKey={fieldKey}
      rules={rules}
    >
      <Input onChange={onChange} type="file" suffix={suffix} />
    </Form.Item>
  );
};

export default InputFile;
