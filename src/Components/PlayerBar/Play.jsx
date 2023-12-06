import React from "react";
import "./play.scss";

import Track from "./Track";
import SeekBar from "./SeekBar";
import Controls from "./Controls";

import Mobile from "./Mobile";

const Play = () => {
  return (
    <div className="Play">
      <div className="playDiv">
        <Track />
        <SeekBar />
        <Controls />
      </div>

      <div className="navPhone">
        <Mobile />
      </div>
    </div>
  );
};

export default Play;
