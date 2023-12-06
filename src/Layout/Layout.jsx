import React from "react";
import "./Layout.scss";

import Left from "../Components/Sidebar/Left/Left";
import Body from "../Components/Body/Body";
import Right from "../Components/Sidebar/Right/right";
import PlayerBar from "../Components/PlayerBar/Play";
import Header from "../Components/Header/Header";

import { BsMusicNoteBeamed } from "react-icons/bs";

const Layout = () => {
  return (
    <div className="main">
      <Left />
      <Header title="Music" icon={<BsMusicNoteBeamed />} />
      <Body />
      <Right />

      <PlayerBar />
    </div>
  );
};

export default Layout;
