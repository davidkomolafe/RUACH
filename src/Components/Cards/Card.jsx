import React from "react";
import "./Card.scss";
import TrackImg from "../../Assets/img/p4.jpg";
import { BsPlayFill, BsThreeDotsVertical } from "react-icons/bs";

const Card = () => {
  return (
    <div className="cardList">
      <img className="cardImg" src={TrackImg} alt="" />
      <div className="SongDetails">
        <h3 className="SongTitle">Mantles</h3>
        <h4 className="ArtistName">Dr Paul Enenche</h4>
      </div>
      <div className="SongPlayed">
        14.5k
        <BsPlayFill />
      </div>
      <div className="SongTime">4:27</div>
      <BsThreeDotsVertical />
    </div>
  );
};

export default Card;
