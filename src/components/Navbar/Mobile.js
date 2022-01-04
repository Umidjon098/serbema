import React, { useContext } from "react";
import Logo from "../../assets/images/logo.svg";
import { LoginOutlined, UserAddOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { scrollTo } from "../../utils/scrollTo";
import { links } from "../../constants";
import { Drawer } from "antd";
import { MainContext } from "../../context/MainContext";

const Mobile = () => {
  const { toggle, setToggle } = useContext(MainContext);
  const isToken = localStorage.getItem("accessToken");

  const handleClick = (href) => {
    setToggle(false);
    scrollTo({ id: href });
  };

  const onClose = () => {
    setToggle(false);
  };

  return (
    <Drawer
      title="SERBEMA 2022"
      placement="right"
      onClose={onClose}
      visible={toggle}
    >
      <div className="container mobile-sidebar">
        <div className="navbar-content">
          <div className="nav-links">
            <ul>
              {links.map((data, key) => (
                <li key={key} onClick={() => handleClick(data.href)}>
                  {data.title}
                </li>
              ))}
              {!isToken && (
                <>
                  <li onClick={() => handleClick()} className="login-button">
                    <Link to="/register">
                      <UserAddOutlined className="login-button" />
                      Sign Up
                    </Link>
                  </li>
                  <li onClick={() => handleClick()} className="login-button">
                    <Link to="/login">
                      <LoginOutlined className="login-button" />
                      Sign In
                    </Link>
                  </li>
                </>
              )}
              {isToken && (
                <li onClick={() => handleClick()} className="login-button">
                  <Link to="/addautor">
                    <UserAddOutlined className="login-button" />
                    Submit Paper
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default Mobile;
