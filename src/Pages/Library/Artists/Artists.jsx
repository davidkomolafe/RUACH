import React from "react";

import Header from "../../../Components/Header/Header";
import Left from "../../../Components/Sidebar/Left/Left";
import PlayerBar from "../../../Components/PlayerBar/Play";
import Right from "../../../Components/Sidebar/Right/right";
import { TbMusicCode } from "react-icons/tb";
import ArtistsScreen from "./ArtistsScreen";

const Artists = () => {
  return (
    <div className="main">
      <Left />
      <Header title="Artists" icon={<TbMusicCode />} />
      <ArtistsScreen />
      <Right />

      <PlayerBar />
    </div>
  );
};

export default Artists;
