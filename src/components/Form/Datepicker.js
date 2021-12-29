import React from "react";
import { Form, DatePicker } from "antd";

const InputDatePicker = ({
	label,
	name = "",
	rules,
	restField,
	fieldKey = "",
	showTime = false,
	placeholder = "",
	className = "",
}) => {
	return (
		<Form.Item
			{...restField}
			label={label}
			name={name}
			rules={rules}
			fieldKey={fieldKey}
		>
			<DatePicker
				showTime={showTime}
				placeholder={placeholder}
				className={className}
				style={{ width: "100%" }}
			/>
		</Form.Item>
	);
};

export default InputDatePicker;
