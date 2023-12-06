import React from "react";
import "./Left.scss";

import logo from "../../../Assets/ruach_logo.png";

import { BiLogoWindows } from "react-icons/bi";
import { BiLogoPlayStore } from "react-icons/bi";
import { BiLogoApple } from "react-icons/bi";
import { BsPlaystation } from "react-icons/bs";
import { TbDeviceWatchDown } from "react-icons/tb";
import { IoCarSport } from "react-icons/io5";

import { BsMusicNoteBeamed } from "react-icons/bs";
import { FaPodcast } from "react-icons/fa";
import { BiSolidPlaylist } from "react-icons/bi";
import { HiFolderDownload } from "react-icons/hi";
import { MdHistory } from "react-icons/md";
import { IoMdStats } from "react-icons/io";

import { Link } from "react-router-dom";

import Music from "./Music";
import Library from "./Library";

const Left = () => {
  return (
    <div className="sideBar grid">
      <Link to="/" className="logoDiv">
        <img src={logo} alt="" />
        <h1>RUACH</h1>
      </Link>

      <Music title="music" to="/" icon={<BsMusicNoteBeamed />} />

      <Music title="podcast" to="/podcast" icon={<FaPodcast />} />

      <div className="libraryDiv">
        <h3 className="divTitle">library</h3>
      </div>

      <ul className="menuList">
        <Library title="playlist" to="/playlist" icon={<BiSolidPlaylist />} />
        <Library
          title="Downloads"
          to="/downloads"
          icon={<HiFolderDownload />}
        />
        <Library title="history" to="/history" icon={<MdHistory />} />
        <Library title="stats" to="/Stats" icon={<IoMdStats />} />
      </ul>

      <div className="downloadDiv">
        <h3 className="divTitle">Download for</h3>
      </div>

      <div className="menuList ">
        <ul className="downloadDevice">
          <li data-title="Windows">
            <BiLogoWindows className="downloadIcon" />
          </li>
          <li data-title="Android">
            <BiLogoPlayStore className="downloadIcon" />
          </li>
          <li data-title="IOS">
            <BiLogoApple className="downloadIcon" />
          </li>
          <li data-title="Playstation">
            <BsPlaystation className="downloadIcon" />
          </li>
          <li data-title="Wearables">
            <TbDeviceWatchDown className="downloadIcon" />
          </li>
          <li data-title="Car Play">
            <IoCarSport className="downloadIcon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Left;
