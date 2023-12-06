import React from "react";

const TopPlaylist = () => {
  return (
    <div className="TopMix">
      <ul className="MixHeader">
        <li>#</li>
        <li>TOP PLAYLIST</li>
        <li>PLAYS</li>
      </ul>
      <div className="MixBody">
        <ul>
          <li>1</li>
          <li>Prayer CHants</li>
          <li>3,200</li>
        </ul>
        <ul>
          <li>2</li>
          <li>Soaking Worship</li>
          <li>1,600</li>
        </ul>
        <ul>
          <li>3</li>
          <li>Audio Bible</li>
          <li>1,200</li>
        </ul>
        <ul>
          <li>4</li>
          <li>Healing Sounds</li>
          <li>700</li>
        </ul>
        <ul>
          <li>5</li>
          <li>Arab Worship</li>
          <li>500</li>
        </ul>
        <ul>
          <li>6</li>
          <li>Jewish Worship</li>
          <li>200</li>
        </ul>
      </div>
    </div>
  );
};

export default TopPlaylist;
