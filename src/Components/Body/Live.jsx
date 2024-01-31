import React from "react";
import LiveCard from "../Live/LiveCard";
import { LiveData } from "./SongDetails";

const Live = () => {
  return (
    <div className="Live">
      <div className="LiveContainer">
        {LiveData.map((song, i) => {
          return <LiveCard key={LiveData.id} idx={i} song={song} />;
        })}
      </div>
    </div>
  );
};

export default Live;
