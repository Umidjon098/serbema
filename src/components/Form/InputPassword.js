import React from "react";
import { Form, Input } from "antd";

const InputPassword = ({
  label,
  name,
  rules,
  placeholder,
  className,
  size,
  reuired,
}) => {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <Input.Password
        required={reuired}
        size={size}
        placeholder={placeholder}
        className={className}
      />
    </Form.Item>
  );
};

export default InputPassword;
