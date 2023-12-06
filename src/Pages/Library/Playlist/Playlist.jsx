import React from "react";
import "../../Podcast/Podcast.scss";

import Header from "../../../Components/Header/Header";
import Left from "../../../Components/Sidebar/Left/Left";
import PlayerBar from "../../../Components/PlayerBar/Play";
import Right from "../../../Components/Sidebar/Right/right";
import { BiSolidPlaylist } from "react-icons/bi";
import PlaylistScreen from "./PlaylistScreen";

const Playlist = () => {
  return (
    <div className="main">
      <Left />
      <Header title="Playlist" to="/podcast" icon={<BiSolidPlaylist />} />
      <PlaylistScreen />
      <Right />

      <PlayerBar />
    </div>

    // <div>
    //   <div className="libraryMenu">
    //     <h3 className="downloadsTitle">Playlist</h3>
    //   </div>
    //   <div className="downloadsList">
    //     <div className="dList_">1</div>
    //     <div className="dList_">2</div>
    //     <div className="dList_">3</div>
    //     <div className="dList_">4</div>
    //     <div className="dList_">5</div>
    //     <div className="dList_">6</div>
    //     <div className="dList_">7</div>
    //     <div className="dList_">8</div>
    //     <div className="dList_">9</div>
    //     <div className="dList_">10</div>
    //   </div>
    // </div>
  );
};

export default Playlist;
