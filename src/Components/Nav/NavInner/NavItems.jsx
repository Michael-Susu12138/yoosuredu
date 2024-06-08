import React from "react";
import "./NavItems.css";
import { Nav as BootstrapNav } from "react-bootstrap";
import SearchIcon from "/searchIcon.png";

const NavItems = () => {
  return (
    <div className="nav-items">
      <BootstrapNav className="ms-auto nav-links">
        <BootstrapNav.Link href="/">主页</BootstrapNav.Link>
        <BootstrapNav.Link href="/teachers">师资</BootstrapNav.Link>
        <BootstrapNav.Link href="/cases">案例</BootstrapNav.Link>
        <BootstrapNav.Link href="/majors">专业</BootstrapNav.Link>
        <BootstrapNav.Link href="/colleges">院校</BootstrapNav.Link>
        <BootstrapNav.Link href="/about">关于Yoosuredu</BootstrapNav.Link>
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
