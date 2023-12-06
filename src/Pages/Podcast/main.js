import React from "react";
import { MdPlayArrow } from "react-icons/md";
import dataImg from "../../Assets/img/p6.jpg";

const main = (props) => {
  return (
    <div className="Main">
      <img className="Main" src={dataImg} alt="" />
      <MdPlayArrow className="PlayPodcast" />
      <div className="SongDetails">
        <h3 className="SongTitle">Health is Wealth</h3>
        <h4 className="ArtistName">Dr H. Morris </h4>
      </div>
    </div>
  );
};

export default main;
