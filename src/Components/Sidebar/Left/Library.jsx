import React from "react";
import { Link } from "react-router-dom";

const Library = (props) => {
  return (
    <Link to={props.to}>
      <div className="list_">
        {props.icon} {props.title}
      </div>
    </Link>
  );
};

export default Library;
