import React from "react";
import { MdPlayArrow } from "react-icons/md";
import "./live.scss";
import { FaPodcast } from "react-icons/fa";

const LiveCard = ({ song }) => {
  return (
    <div className="LiveDiv">
      <img className="LiveDiv" src={song.img} alt="" />
      <MdPlayArrow className="PlaySong" />
      <div className="LiveTabDiv">
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
          <FaPodcast size={13} />
          <p className="LiveCount">{song.live}</p>
        </div>
      </div>
    </div>
  );
};

export default LiveCard;
