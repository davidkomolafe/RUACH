import React from "react";
import "./Mobile.scss";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TrackImg from "../../Assets/track_img.jpg";

import {
  pauseMaster,
  playMaster,
  // playSong,
} from "../../states/Actors/SongActor";

import { GoHomeFill } from "react-icons/go";
import { FaPodcast, FaHeart } from "react-icons/fa";
import { FaPause, FaPlay } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";

const Mobile = (props) => {
  const location = useLocation();

  const isActive = location.pathname === props.to;
  const navBar = isActive ? "navBar active" : "navBar";

  const { masterSong, isPlaying } = useSelector((state) => state.mainSong);

  const dispatch = useDispatch();
  const handleMaster = () => {
    if (isPlaying) {
      dispatch(pauseMaster());
    } else {
      dispatch(playMaster());
    }
  };
  return (
    <div className="navPhone">
      <div className="mobilePlaying">
        <div className="playLeft">
          <div className="songImg">
            {masterSong.img ? (
              <img className="songImg" src={masterSong.img} alt="" />
            ) : (
              <img className="songImg" src={TrackImg} alt="" />
            )}
          </div>
          <div className="nowPlaying">
            <div className="songTitle">
              {masterSong?.title ? masterSong?.title : "No active Song"}
            </div>
            <div className="songAuthor">
              {masterSong?.artist ? masterSong?.artist : "No active Song"}
            </div>
          </div>
        </div>
        <div className="Ctrls">
          {isPlaying ? (
            <FaPause className="playBtn" onClick={handleMaster} />
          ) : (
            <FaPlay className="playBtn" onClick={handleMaster} />
          )}

          <FaHeart className="heartBtn" />
        </div>
      </div>
      <ul className="navContainer">
        <Link to="/" className={navBar}>
          <GoHomeFill />
          <span className=" Text">Home</span>
        </Link>
        <Link to="/podcast" className={navBar}>
          <FaPodcast />
          <span className="Text">Podcast</span>
        </Link>
        <Link to="/library" className={navBar}>
          <IoLibrary />
          <span className="Text">Library</span>
        </Link>
      </ul>
    </div>
  );
};

export default Mobile;
