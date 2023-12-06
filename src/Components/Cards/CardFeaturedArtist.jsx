import React from "react";
import TrackImg from "../../Assets/img/p6.jpg";

import { MdPlayArrow } from "react-icons/md";

const CardFeaturedArtist = () => {
  return (
    <div class="fList">
      <img className="fList" src={TrackImg} alt="" />

      <MdPlayArrow className="PlaySong" />
      <div className="songBar">
        <h3 className="SongTitle">Mantles</h3>
        <h4 className="ArtistName">Dr Paul Enenche</h4>
      </div>
    </div>
  );
};

export default CardFeaturedArtist;
