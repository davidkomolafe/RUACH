import "./PlaylistR.scss";
// import { cardsData } from "./SongDetails";
// import dataImg from "../../Assets/img/p3.jpg";

import { MdPlayArrow } from "react-icons/md";
const PlaylistOption = ({ card }) => {
  return (
    <div className="panel active">
      <img className="panel" src={card.img} alt="" />
      <MdPlayArrow className="PlaySong" />
      <div className="PlaylistBar">
        <h3 className="PlaylistTitle">{card.title}</h3>
        <h4 className="PlaylistTagName">{card.artist}</h4>
      </div>
    </div>
  );
};
export default PlaylistOption;
