import React, { useContext } from "react";
import {
  LoginOutlined,
  UserAddOutlined,
  MenuFoldOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { scrollTo } from "../../utils/scrollTo";
import { links } from "../../constants";
import { MainContext } from "../../context/MainContext";
const handleClick = (href) => scrollTo({ id: href });
const menu1 = (
  <Menu>
    <Menu.Item onClick={() => handleClick("commite")}>Chair</Menu.Item>
    <Menu.Item onClick={() => handleClick("commite")}>Co-Chair</Menu.Item>
    <Menu.Item onClick={() => handleClick("commite")}>Cordinator</Menu.Item>
  </Menu>
);
const menu2 = (
  <Menu>
    <Menu.Item onClick={() => handleClick("honorable")}>Honorable</Menu.Item>
    <Menu.Item onClick={() => handleClick("keynote")}>Keynote</Menu.Item>
  </Menu>
);
const Navbar = () => {
  const { setToggle } = useContext(MainContext);

  const isToken = localStorage.getItem("accessToken");

  return (
    <div id="home" className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="nav-logo">
            <div className="company">SERBEMA-2022</div>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <Dropdown overlay={menu1} placement="bottomCenter" arrow>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    commite <DownOutlined />
                  </a>
                </Dropdown>
              </li>
              <li>
                <Dropdown overlay={menu2} placement="bottomCenter" arrow>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    speakers <DownOutlined />
                  </a>
                </Dropdown>
              </li>
              {links.map((data, key) => (
                <li key={key} onClick={() => handleClick(data.href)}>
                  {data.title}
                </li>
              ))}
              {!isToken && (
                <>
                  <li className="login-button">
                    <Link to="/register">
                      <UserAddOutlined className="login-button" />
                      Sign Up
                    </Link>
                  </li>
                  <li className="login-button">
                    <Link to="/login">
                      <LoginOutlined className="login-button" />
                      Sign In
                    </Link>
                  </li>
                </>
              )}
              {isToken && (
                <li className="login-button">
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
      <div className="toggle-btn">
        <MenuFoldOutlined
          onClick={() => setToggle(true)}
          style={{ fontSize: "30px", color: "#000" }}
        />
      </div>
    </div>
  );
};

export default Navbar;
