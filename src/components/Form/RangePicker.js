import React from "react";
import { Form, DatePicker } from "antd";

const { RangePicker } = DatePicker;

const InputRangePicker = ({
	label,
	name = "",
	rules,
	restField,
	fieldKey = "",
}) => {
	return (
		<Form.Item
			{...restField}
			label={label}
			name={name}
			rules={rules}
			fieldKey={fieldKey}
		>
			<RangePicker showTime />
		</Form.Item>
	);
};

export default InputRangePicker;
