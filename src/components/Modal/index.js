import React from "react";
import { Modal } from "antd";

const AntModal = ({ visible, setVisible, content, title = "Basic Modal" }) => {
  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Modal
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={""}
    >
      {content}
    </Modal>
  );
};

export default AntModal;
