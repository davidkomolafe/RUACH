import React from "react";
import { MdPlayArrow } from "react-icons/md";
import "./live.scss";
import { FiRadio } from "react-icons/fi";
import live from "../../Assets/img/live.svg";

const LiveCard = ({ song }) => {
  return (
    <div className="LiveDiv">
      <div className="LiveIcon">
        <FiRadio className="RadioIcon" /> <p>LIVE</p>
      </div>
      <img className="LiveDiv" src={song.img} alt="" />
      <MdPlayArrow className="PlaySong" />
      <div className="LiveTabDiv">
        <img className="profImg" src={song.img} alt="" />
        <div className="LiveBar">
          {song.title ? (
            <h3 className="LiveTitle">
              {song.title?.length > 19
                ? `${song.title.slice(0, 19)}...`
                : song.title}
            </h3>
          ) : (
            <></>
          )}
          {song.artist ? (
            <h4 className="LiveArtist">
              {" "}
              {song.artist?.length > 15
                ? `${song.artist.slice(0, 15)}...`
                : song.artist}
            </h4>
          ) : (
            <></>
          )}
        </div>
        <div className="LiveNow">
          <img alt="live" src={live} className="ImgLive" />
          <p className="LiveCount">{song.live}</p>
        </div>
      </div>
    </div>
  );
};

export default LiveCard;
