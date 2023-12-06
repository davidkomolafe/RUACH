import React from "react";
import "../right.scss";
import { FaPlay } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import TrackImg from "../../../../Assets/img/p4.jpg";

const QCard = () => {
  return (
    <div className="QueueCard">
      <img className="cardImg" src={TrackImg} alt="" />
      <div className="SongDetails">
        <h3 className="SongTitle">Mantles</h3>
        <h4 className="ArtistName">Dr Paul Enenche</h4>
      </div>
      <ul>
        <li>
          <FaPlay />
        </li>
        <li className="SongTime">4:27</li>
        <li>
          <BsThreeDotsVertical />
        </li>
      </ul>
    </div>
  );
};

export default QCard;
