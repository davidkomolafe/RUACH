import React from "react";
import "./Mobile.scss";
import { NavLink } from "react-router-dom";
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
import SeekBar from "./SeekBar";

const Mobile = () => {
  const NavBar = ({ isActive }) => (isActive ? "navBar activeBar" : "navBar");

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
      <SeekBar />
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
        <NavLink to="/" className={NavBar}>
          <GoHomeFill />
          <span className=" Text">Home</span>
        </NavLink>
        <NavLink to="/podcast" className={NavBar}>
          <FaPodcast />
          <span className="Text">Podcast</span>
        </NavLink>
        <NavLink to="/library" className={NavBar}>
          <IoLibrary />
          <span className="Text">Library</span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Mobile;
