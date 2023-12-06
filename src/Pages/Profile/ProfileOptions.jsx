import React from "react";

const ProfileOptions = (props) => {
  return (
    <div className="list">
      {props.icon} {props.title}
    </div>
  );
};

export default ProfileOptions;
