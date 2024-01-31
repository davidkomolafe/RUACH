import React from "react";
import { MdPlayArrow } from "react-icons/md";

const PodcastCard = ({ song, idx }) => {
  return (
    <div className="Main">
      <img className="Main" src={song.img} alt="" />
      <MdPlayArrow className="PlayPodcast" />
      <div className="SongDetails">
        {song.title ? (
          <h3 className="SongTitle">
            {song.title?.length > 19
              ? `${song.title.slice(0, 19)}...`
              : song.title}
          </h3>
        ) : (
          <></>
        )}

        {song.artist ? (
          <h4 className="ArtistName">
            {song.artist?.length > 15
              ? `${song.artist.slice(0, 15)}...`
              : song.artist}
          </h4>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PodcastCard;
