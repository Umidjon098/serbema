import React from "react";
import { Form, Input } from "antd";

const InputText = ({
  label,
  name,
  rules,
  restField,
  fieldKey,
  suffix,
  placeholder,
  className,
  size,
  required,
}) => {
  return (
    <Form.Item
      {...restField}
      label={label}
      name={name}
      rules={rules}
      fieldKey={fieldKey}
    >
      <Input
        required={required}
        size={size}
        suffix={suffix}
        placeholder={placeholder}
        className={className}
      />
    </Form.Item>
  );
};

export default InputText;
