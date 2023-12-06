import React from "react";
import { MdHistory } from "react-icons/md";
import HistoryScreen from "./HistoryScreen";

import Header from "../../../Components/Header/Header";
import Left from "../../../Components/Sidebar/Left/Left";
import PlayerBar from "../../../Components/PlayerBar/Play";
import Right from "../../../Components/Sidebar/Right/right";

const History = () => {
  return (
    <div className="main">
      <Left />
      <Header title="History" icon={<MdHistory />} />
      <HistoryScreen />
      <Right />

      <PlayerBar />
    </div>
  );
};

export default History;
