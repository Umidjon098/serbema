import React from "react";
import { Spin } from "antd";
import PropTypes from "prop-types";

const Loading = (props) => {
  const { align, cover } = props;
  return (
    <div className={`loading text-${align} cover-${cover}`}>
      <Spin tip="loading" size="large" />
    </div>
  );
};

Loading.propTypes = {
  size: PropTypes.string,
  cover: PropTypes.string,
};

Loading.defaultProps = {
  align: "center",
  cover: "inline",
};

export default Loading;
