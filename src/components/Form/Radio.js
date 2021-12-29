import { Radio, Space } from "antd";

const RadioButton = ({ options, ...props }) => {
	return (
		<Radio.Group {...props}>
			<Space direction="vertical">
				{options.map((o, i) => (
					<Radio key={i} value={o.value}>
						{o.label}
					</Radio>
				))}
			</Space>
		</Radio.Group>
	);
};

export default RadioButton;
