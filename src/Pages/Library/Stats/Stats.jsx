import React from "react";
import { IoMdStats } from "react-icons/io";
import StatsScreen from "./StatsScreen";

import Header from "../../../Components/Header/Header";
import Left from "../../../Components/Sidebar/Left/Left";
import PlayerBar from "../../../Components/PlayerBar/Play";
import Right from "../../../Components/Sidebar/Right/right";

const Stats = () => {
  return (
    <div className="main">
      <Left />
      <Header title="Stats" icon={<IoMdStats />} />
      <StatsScreen />
      <Right />

      <PlayerBar />
    </div>
  );
};

export default Stats;
