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
  required,
}) => {
  return (
    <Form.Item {...restField} label={label} name={name} fieldKey={fieldKey}>
      <Input
        placeholder={placeholder}
        size={size}
        type="email"
        suffix={suffix}
        required={required}
      />
    </Form.Item>
  );
};

export default InputEmail;
