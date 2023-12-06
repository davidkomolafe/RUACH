import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./VolumeBar.scss";

import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";

// import { useGlobalContext } from "../../states/Contet";

const VolumeBar = () => {
  const { masterSong } = useSelector((state) => state.mainSong);

  // const { progress } = useGlobalContext();
  const [volume, setVolume] = useState(50);
  const changeVolume = (e) => {
    setVolume(e.target.value);
    console.log(e.target.value);
    masterSong.mp3.volume = e.target.value / 100;
  };

  return (
    <div className="volumeBtn">
      {volume > 0 && <BsFillVolumeUpFill />}

      {volume <= 0 && <BsFillVolumeMuteFill />}

      <input
        type="range"
        step="1"
        className="volumeBar"
        name=""
        min={0}
        value={volume}
        disabled={!masterSong.mp3}
        onChange={changeVolume}
        max={100}
      />
    </div>
  );
};

export default VolumeBar;
