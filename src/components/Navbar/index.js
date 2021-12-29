import React, { useContext, useEffect, useState } from "react";
import Logo from "../../assets/images/logo.svg";
import {
  LoginOutlined,
  UserAddOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { scrollTo } from "../../utils/scrollTo";
import { links } from "../../constants";
import { MainContext } from "../../context/MainContext";
const Navbar = () => {
  const { setToggle } = useContext(MainContext);

  const isToken = localStorage.getItem("accessToken");

  const handleClick = (href) => scrollTo({ id: href });

  return (
    <div id="home" className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="nav-logo">
            <div className="logo">
              <img src={Logo} alt={"Logo"} />
            </div>
            <div className="company">SERBEMA-2022</div>
          </div>
          <div className="nav-links">
            <ul>
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
            </ul>
          </div>
        </div>
      </div>
      <div className="toggle-btn">
        <MenuFoldOutlined
          onClick={() => setToggle(true)}
          style={{ fontSize: "30px", color: "#fff" }}
        />
      </div>
    </div>
  );
};

export default Navbar;
