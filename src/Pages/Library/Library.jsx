import React from "react";
import Header from "../../Components/Header/Header";
import PlayerBar from "../../Components/PlayerBar/Play";
import "./Library.scss";
import { Link } from "react-router-dom";

import { BiSolidPlaylist } from "react-icons/bi";
import { HiFolderDownload } from "react-icons/hi";
import { MdHistory } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { IoLibrary } from "react-icons/io5";

import LibraryOption from "./LibraryOption";
import Left from "../../Components/Sidebar/Left/Left";
import Right from "../../Components/Sidebar/Right/right";

const Library = () => {
  return (
    <div className="main">
      <Left />
      <Header title="Library" icon={<IoLibrary />} />
      {/* <Body /> */}
      <div className="Library">
        <ul className="libraryBar">
          <Link to={"/playlist"}>
            <LibraryOption title="playlist" icon={<BiSolidPlaylist />} />
          </Link>
          <Link to={"/downloads"}>
            <LibraryOption title="downloads" icon={<HiFolderDownload />} />
          </Link>
          <Link to={"/history"}>
            <LibraryOption title="history" icon={<MdHistory />} />
          </Link>
          <Link to={"/stats"}>
            <LibraryOption title="stats" icon={<IoMdStats />} />
          </Link>
        </ul>
      </div>
      <Right />
      <PlayerBar />
    </div>
  );
};

export default Library;
