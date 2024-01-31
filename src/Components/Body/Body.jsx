import React from "react";
import "./Body.scss";
import PlaylistR from "./PlaylistR";
import TopCharts from "./TopCharts";
import Recent from "./Recent";
import Featured from "./Featured";
import Recommend from "./Recommend";
import Live from "./Live";

const Body = () => {
  return (
    <div className="Body">
      <div className="mainContent">
        <Live />
        <PlaylistR />
        <Recommend />
      </div>
      <div className="songsDiv">
        <TopCharts />
        <Recent />
        <Featured />
      </div>
    </div>
  );
};

export default Body;
