import React from "react";
import { BiPause } from "react-icons/bi";
import { MdPlayArrow } from "react-icons/md";
import "./CardSong.scss";
import { useDispatch, useSelector } from "react-redux";
import { pauseSong, playSong } from "../../states/Actors/SongActor";
import { useGlobalContext } from "../../states/Context";

const CardSong = ({ song, idx }) => {
  const { masterSong, isPlaying } = useSelector((state) => state.mainSong);
  const { resetEverything, setSongIdx } = useGlobalContext();
  const dispatch = useDispatch();

  const handlePlay = (song) => {
    console.log("playing");
    setSongIdx(idx);
    console.log(idx);
    if (isPlaying) {
      masterSong.mp3.currentTime = 0;
      masterSong.mp3.pause();
      resetEverything();
    }
    dispatch(playSong(song));
  };
  const handlePause = () => {
    dispatch(pauseSong());
  };
  const mouseEnter = () => {
    document.querySelector(".PlaySong").style.background = "green";
  };
  const mouseLeave = () => {
    document.querySelector(".PlaySong").style.background = "#fff";
  };
  return (
    song && (
      <div className="recommendSong">
        <img className="recommendSong" src={song.img} alt="" />
        {masterSong.id === song.id && isPlaying ? (
          <BiPause
            className="PlaySong"
            onClick={handlePause}
            onFocus={mouseEnter}
          />
        ) : (
          <MdPlayArrow
            className="PlaySong"
            onFocus={mouseLeave}
            onClick={() => handlePlay(song)}
          />
        )}
        <div className="songBar">
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
    )
  );
};

export default CardSong;
