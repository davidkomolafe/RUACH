import React, { useEffect } from "react";
import "./SeekBar.scss";

import { useDispatch, useSelector } from "react-redux";

import { MdPlayArrow, MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { BiPause } from "react-icons/bi";

import { useGlobalContext } from "../../states/Context";
import { songs } from "../Body/SongDetails";

import {
  pauseMaster,
  playMaster,
  playSong,
} from "../../states/Actors/SongActor";

const SeekBar = () => {
  const { masterSong, isPlaying } = useSelector((state) => state.mainSong);
  const {
    progress,
    setProgress,
    resetEverything,
    songIdx,
    setSongIdx,
    currTime,
    setCurrTime,
    duration,
    setDuration,
  } = useGlobalContext();
  const dispatch = useDispatch();
  const handleMaster = () => {
    if (isPlaying) {
      dispatch(pauseMaster());
    } else {
      dispatch(playMaster());
    }
  };

  useEffect(() => {
    if (masterSong.mp3) {
      setDuration(formatTime(masterSong?.mp3?.duration));
      if (isPlaying) {
        masterSong?.mp3?.play();
      } else {
        masterSong?.mp3?.pause();
      }
    }
    if (isPlaying) {
      setInterval(() => {
        if (progress === 100) {
          dispatch(pauseMaster());
          resetEverything();
        } else {
          setProgress(
            Math.round(
              (masterSong.mp3.currentTime / masterSong.mp3.duration) * 100
            )
          );
          setCurrTime(formatTime(masterSong.mp3.currentTime));
        }
      }, 1000);
    }
  });

  const changeProgress = (e) => {
    setProgress(e.target.value);
    masterSong.mp3.currentTime =
      (e.target.value / 100) * masterSong.mp3.duration;
    console.log(progress);
  };

  const formatTime = (durationInSeconds) => {
    let minutes = Math.floor((durationInSeconds / 60) % 60);
    let seconds = Math.floor(durationInSeconds % 60);

    let formattedDuration = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    return formattedDuration;
  };
  const backwardSong = () => {
    console.log("backward");
    if (masterSong.mp3) {
      masterSong?.mp3?.pause();
      masterSong.mp3.currentTime = 0;
    }
    resetEverything();
    setSongIdx((prevstate) => prevstate - 1);
    dispatch(playSong(songs[songIdx - 1]));
  };

  const forwardSong = () => {
    if (masterSong.mp3) {
      masterSong?.mp3?.pause();
      masterSong.mp3.currentTime = 0;
    }
    resetEverything();
    console.log("forward");
    setSongIdx((prevstate) => prevstate + 1);
    dispatch(playSong(songs[songIdx + 1]));
  };
  return (
    <div className="playSeek">
      <div className="playIcon">
        <div className="backwardBtn">
          <MdSkipPrevious onClick={backwardSong} />
        </div>

        <div>
          {isPlaying ? (
            <BiPause className="playBtn" onClick={handleMaster} />
          ) : (
            <MdPlayArrow className="playBtn" onClick={handleMaster} />
          )}
        </div>
        <div className="forwardBtn">
          <MdSkipNext onClick={forwardSong} />
        </div>
      </div>
      <div className="seekContainer">
        <h3 className="seekTime">{currTime}</h3>
        <input
          type="range"
          className="SeekBar"
          name=""
          min={0}
          max={100}
          value={progress}
          disabled={!masterSong.mp3}
          onChange={changeProgress}
        />
        <h3 className="seekTime">{duration}</h3>
      </div>
    </div>
  );
};

export default SeekBar;
