import React from "react";
import "./header.scss";

import { MdInstallMobile } from "react-icons/md";

import Search from "./Search";
import Profile from "./Profile";

const Header = (props) => {
  const toGgg = (e) => {
    e.preventDefault();
    document.querySelector(".searchTab").classList.toggle("close");
  };
  return (
    <div className=" Heady">
      <u className="RuachMenu">
        {props.icon} {props.title}
      </u>
      <div className="InstallApp">
        <MdInstallMobile />
        <span> Install App</span>
      </div>
      <Search onClick={toGgg} />
      <Profile />
    </div>
  );
};

export default Header;
