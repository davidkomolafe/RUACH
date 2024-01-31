import React from "react";
import "./Podcast.scss";

import Header from "../../Components/Header/Header";
import Left from "../../Components/Sidebar/Left/Left";
import PlayerBar from "../../Components/PlayerBar/Play";
import Right from "../../Components/Sidebar/Right/right";
import { FaPodcast } from "react-icons/fa";
import PodcastScreen from "./PodcastScreen";

const Podcast = () => {
  return (
    <div className="main">
      <Left />
      <Header title="Podcast" to="/podcast" icon={<FaPodcast />} />
      <PodcastScreen />
      <Right />

      <PlayerBar />
    </div>
  );
};

export default Podcast;
