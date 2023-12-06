import React from "react";
import "./Music.scss";

import { Link, useLocation } from "react-router-dom";

const Music = (props) => {
  const location = useLocation();

  const isActive = location.pathname === props.to;
  const list_ = isActive ? "list_ active" : "list_";
  return (
    <Link to={props.to}>
      <div className={list_}>
        {props.icon} {props.title}
      </div>
    </Link>
  );
};

export default Music;
