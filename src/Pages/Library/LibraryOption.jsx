import React from "react";
import "./Library.scss";

const LibraryOption = (props) => {
  return (
    <div className="libraryList_">
      {props.icon} {props.title}
    </div>
  );
};

export default LibraryOption;
