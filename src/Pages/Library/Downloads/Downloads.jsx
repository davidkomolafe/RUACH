import React from "react";
import { HiFolderDownload } from "react-icons/hi";
import DownloadsScreen from "./DownloadsScreen";

import Header from "../../../Components/Header/Header";
import Left from "../../../Components/Sidebar/Left/Left";
import PlayerBar from "../../../Components/PlayerBar/Play";
import Right from "../../../Components/Sidebar/Right/right";

const Downloads = () => {
  return (
    <div className="main">
      <Left />
      <Header title="Downloads" icon={<HiFolderDownload />} />
      <DownloadsScreen />
      <Right />

      <PlayerBar />
    </div>
  );
};

export default Downloads;
