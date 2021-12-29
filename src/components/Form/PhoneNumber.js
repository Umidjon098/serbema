import React from "react";
import PhoneInputCom from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ru from "react-phone-number-input/locale/ru";
import { Form } from "antd";

function PhoneNumber(props) {
  return (
    <Form.Item
      label="Phone number"
      name={props.name}
      rules={[{ required: props.required }]}
    >
      <PhoneInputCom
        className="custom-phone-input"
        international
        labels={ru}
        countryOptionsOrder={["UZ", "RU", "US", "..."]}
        {...props}
      />
    </Form.Item>
  );
}

export default PhoneNumber;
