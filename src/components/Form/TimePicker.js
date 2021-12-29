import React from "react";
import { Form, TimePicker } from "antd";

const InputTimePicker = ({
	label,
	name,
	rules,
	restField,
	fieldKey,
	className = "",
	placeholder = "",
}) => {
	return (
		<Form.Item
			{...restField}
			label={label}
			name={name}
			rules={rules}
			fieldKey={fieldKey}
		>
			<TimePicker
				style={{ width: "100%" }}
				placeholder={placeholder}
				className={className}
			/>
		</Form.Item>
	);
};

export default InputTimePicker;
