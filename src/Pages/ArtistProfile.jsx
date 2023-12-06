import React from "react";
import artistImage from "./Profile/artistImage.jpg";
import "./ArtistProfile.scss";

const ArtistProfile = () => {
  return (
    <div>
      <img src={artistImage} alt="" />
    </div>
  );
};

export default ArtistProfile;
