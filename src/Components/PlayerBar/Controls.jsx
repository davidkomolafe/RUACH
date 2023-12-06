import React from "react";
import "./Controls.scss";

import VolumeBar from "./VolumeBar";

import { MdLyrics } from "react-icons/md";
// import { AiOutlineDownload } from "react-icons/ai";
// import { IoIosShuffle } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";

import { HiQueueList } from "react-icons/hi2";

import { TfiLoop } from "react-icons/tfi";

const Controls = () => {
  const toGg = (e) => {
    e.preventDefault();
    document.querySelector(".Lyrics").classList.toggle("close");
  };
  const toGl = (e) => {
    e.preventDefault();
    document.querySelector(".QueueList").classList.toggle("close");
  };
  return (
    <ul className="playButton">
      <li data-title="Repeat" className="loopBtn">
        <TfiLoop />
      </li>
      <li data-title="Like" className="heartBtn">
        <AiFillHeart />
      </li>
      <li data-title="Lyrics" className="loopBtn" onClick={toGg}>
        <MdLyrics />
      </li>
      {/* <li className="downloadBtn">
        <AiOutlineDownload />
      </li> */}
      {/* <li className="shuffleBtn">
        <IoIosShuffle />
      </li> */}

      <li data-title="Queue" className="playlistBtn">
        <HiQueueList onClick={toGl} />
      </li>

      <VolumeBar />
    </ul>
  );
};

export default Controls;
