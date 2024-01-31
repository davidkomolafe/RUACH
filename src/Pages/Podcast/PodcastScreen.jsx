import React from "react";
import PodcastCard from "./PodcastCard";
import { songs } from "../../Components/Body/SongDetails";

const PodcastScreen = (song) => {
  return (
    <div className="Podcast">
      <div className="PodcastTab">
        <div>
          <h3>Health & Fitness</h3>
        </div>
        <div className="Pod">
          {songs.map((song, i) => {
            return <PodcastCard key={song.id} idx={i} song={song} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PodcastScreen;
