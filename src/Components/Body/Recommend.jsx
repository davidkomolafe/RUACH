import React from "react";
import CardSong from "../Cards/CardSong";
import { songs } from "./SongDetails";

const Recommend = () => {
  return (
    <div className="recommendDiv">
      <h3>RECOMMENDED FOR YOU</h3>
      <div className="recommendMenu">
        {songs.map((song, i) => {
          return <CardSong key={song.id} idx={i} song={song} />;
        })}
      </div>
    </div>
  );
};

export default Recommend;
