import React from "react";
import { Form, Select } from "antd";
import { tl } from "i18n/i18n";

const { Option } = Select;

const InputText = ({
	label,
	name,
	rules,
	placeholder,
	options,
	mode = "",
	restField,
	fieldKey,
	size,
	className,
	defaultValue,
	allowClear,
}) => {
	return (
		<Form.Item
			{...restField}
			label={tl(label)}
			name={name}
			rules={rules}
			fieldKey={fieldKey}
			initialValue={defaultValue}
		>
			<Select
				allowClear={allowClear}
				className={className}
				size={size}
				showSearch
				mode={mode}
				filterOption={(input, option) =>
					option.children
						.toLowerCase()
						.indexOf(input.toLowerCase()) >= 0
				}
				filterSort={(optionA, optionB) =>
					optionA.children
						.toLowerCase()
						.localeCompare(optionB.children.toLowerCase())
				}
				placeholder={tl(placeholder)}
			>
				{options.map((o, i) => (
					<Option key={i} value={o.value}>
						{o.label}
					</Option>
				))}
			</Select>
		</Form.Item>
	);
};

export default InputText;
