import React, { useState } from "react";
import { Form, Input } from "antd";

const InputEmail = ({
  label,
  name,
  rules,
  restField,
  fieldKey,
  suffix = "",
  size,
  placeholder,
}) => {
  return (
    <Form.Item
      {...restField}
      label={label}
      name={name}
      fieldKey={fieldKey}
      rules={rules}
    >
      <Input
        placeholder={placeholder}
        size={size}
        type="email"
        suffix={suffix}
      />
    </Form.Item>
  );
};

export default InputEmail;
