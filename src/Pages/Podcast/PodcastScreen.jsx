import React from "react";
import PodcastCard from "./PodcastCard";
import { songs } from "../../Components/Body/SongDetails";
import TopCharts from "../../Components/Body/TopCharts";

const PodcastScreen = (song) => {
  return (
    <div className="Podcast">
      <TopCharts />
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
      <div className="PodcastTab">
        <div>
          <h3>Productivity</h3>
        </div>
        <div className="Pod">
          {songs.map((song, i) => {
            return <PodcastCard key={song.id} idx={i} song={song} />;
          })}
        </div>
      </div>
      <div className="PodcastTab">
        <div>
          <h3>Faith</h3>
        </div>
        <div className="Pod">
          {songs.map((song, i) => {
            return <PodcastCard key={song.id} idx={i} song={song} />;
          })}
        </div>
      </div>
      <div className="PodcastTab">
        <div>
          <h3>Leadership</h3>
        </div>
        <div className="Pod">
          {songs.map((song, i) => {
            return <PodcastCard key={song.id} idx={i} song={song} />;
          })}
        </div>
      </div>
      <div className="PodcastTab">
        <div>
          <h3>Relationship & Dating</h3>
        </div>
        <div className="Pod">
          {songs.map((song, i) => {
            return <PodcastCard key={song.id} idx={i} song={song} />;
          })}
        </div>
      </div>
      <div className="PodcastTab">
        <div>
          <h3>Drama</h3>
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
