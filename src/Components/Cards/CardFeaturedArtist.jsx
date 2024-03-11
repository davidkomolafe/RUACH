import React from "react";
import TrackImg from "../../Assets/img/p6.jpg";

import { MdPlayArrow, MdStar } from "react-icons/md";

const CardFeaturedArtist = () => {
  return (
    <div class="fList">
      <img className="fList" src={TrackImg} alt="" />
      <MdStar className="Star" />
      <MdPlayArrow className="PlaySong" />
      <div className="songBar">
        <h3 className="SongTitle">Wedding Mix</h3>
        <h4 className="ArtistName">Moses Bliss</h4>
      </div>
    </div>
  );
};

export default CardFeaturedArtist;
