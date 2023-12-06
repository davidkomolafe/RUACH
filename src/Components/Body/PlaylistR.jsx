import React from "react";
import "./PlaylistR.scss";
import { cardsData } from "./SongDetails";
import PlaylistOption from "./PlaylistOption";

const PlaylistR = () => {
  // const [activeId, setActiveId] = useState("");

  // const onClick = (id) => setActiveId(id);
  const mouseEnter = () => {
    document.querySelector(".panel").style.flex = "5";
  };
  return (
    <div className="CardPlaylistDiv">
      {cardsData.map((card) => {
        return (
          <PlaylistOption
            key={card.id}
            card={card}
            // className={`panel ${activeId === card.id ? "active" : ""}`}
            // onClick={() => onClick(card.id)}
            style={{ backgroundImage: `url(${card.img})` }}
            onMouseEnter={mouseEnter}
            onClick={mouseEnter}
          />
        );
      })}
    </div>
  );
};
export default PlaylistR;
