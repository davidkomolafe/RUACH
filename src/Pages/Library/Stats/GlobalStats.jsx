import React from "react";
import icon from "../../../Assets/g.gif";

const GlobalStats = () => {
  return (
    <div className="globe">
      <img src={icon} alt="" />
      <li className="TotalUsers">
        <h5>Total Users</h5>
        <h2>1.17M</h2>
      </li>
      <li className="TotalSongs">
        <h5>Total Songs</h5>
        <h2>30.4k</h2>
      </li>
      <li className="U_Age">
        <h4>Users By Age</h4>
      </li>
      <li className="U_Demo">
        <h4>Users By Demography</h4>
      </li>
    </div>
  );
};

export default GlobalStats;
