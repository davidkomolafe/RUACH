import React from "react";
import "./Track.scss";
import TrackImg from "../../Assets/track_img.jpg";
import { useSelector } from "react-redux";

const Track = () => {
  const { masterSong } = useSelector((state) => state.mainSong);

  return (
    <div className="playLeft">
      {masterSong.img ? (
        <img className="songImg" src={masterSong.img} alt="" />
      ) : (
        <img className="songImg" src={TrackImg} alt="" />
      )}

      <div className="nowPlaying">
        <div className="songTitle">
          {masterSong?.title ? masterSong?.title : "No active Song"}
        </div>
        <div className="songAuthor">
          {masterSong?.artist ? masterSong?.artist : "No active Song"}
        </div>
      </div>
    </div>
  );
};

export default Track;
