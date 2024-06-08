import React from "react";
import { Nav as BootstrapNav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavItems.css";
import SearchIcon from "/searchIcon.png";

const NavItems = () => {
  return (
    <div className="nav-items">
      <BootstrapNav className="ms-auto nav-links">
        <NavLink to="/" className="nav-link" activeClassName="active">
          主页
        </NavLink>
        <NavLink to="/teachers" className="nav-link" activeClassName="active">
          师资
        </NavLink>
        <NavLink to="/cases" className="nav-link" activeClassName="active">
          案例
        </NavLink>
        <NavLink to="/majors" className="nav-link" activeClassName="active">
          专业
        </NavLink>
        <NavLink to="/colleges" className="nav-link" activeClassName="active">
          院校
        </NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active">
          关于Yoosuredu
        </NavLink>
        <div className="search-box">
          <button className="search-button">
            <img src={SearchIcon} alt="" />
          </button>
          <input
            type="text"
            placeholder="搜索"
            className="search-input"
            aria-label="Search"
          />
        </div>
      </BootstrapNav>
    </div>
  );
};

export default NavItems;
