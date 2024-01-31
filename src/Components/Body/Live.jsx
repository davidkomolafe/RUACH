import React from "react";
import LiveTab from "../Live/LiveTab";
import LiveCard from "../Live/LiveCard";
import { LiveData } from "./SongDetails";

const Live = () => {
  return (
    <div className="Live">
      <LiveTab />
      <div className="LiveContainer">
        {LiveData.map((song, i) => {
          return <LiveCard key={LiveData.id} idx={i} song={song} />;
        })}
      </div>
    </div>
  );
};

export default Live;
