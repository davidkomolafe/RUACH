import React from "react";
import "./Podcast.scss";
import Main from "./main";

import Header from "../../Components/Header/Header";
import Left from "../../Components/Sidebar/Left/Left";
import PlayerBar from "../../Components/PlayerBar/Play";
import Right from "../../Components/Sidebar/Right/right";
import { FaPodcast } from "react-icons/fa";

const Podcast = () => {
  return (
    <div className="main">
      <Left />
      <Header title="Podcast" to="/podcast" icon={<FaPodcast />} />
      <div className="Podcast">
        <ul>
          <li>LIVE!</li>
          <li>Faith</li>
          <li>Health & Fitness</li>
          <li>Books</li>
          <li>Productivity</li>
          <li>Godly Relationship</li>
          <li>Drama</li>
          <li>Leadership</li>
        </ul>
        <div className="Pod">
          <Main />
          <Main />
          <Main />
          <Main />
          <Main />
          <Main />
          <Main />
          <Main />
          <Main />
          <Main />
          <Main />
          <Main />
          <Main />
          <Main />
          <Main />
          <Main />
          <Main />
          <Main />
          <Main />
          <Main />
          <Main />
          <Main />
          <Main />
          <Main />
        </div>
      </div>
      <Right />

      <PlayerBar />
    </div>
  );
};

export default Podcast;
