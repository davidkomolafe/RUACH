import React from "react";
import CardSong from "../../Components/Cards/CardSong";
import { useGlobalContext } from "../../states/Context";

const SearchScreen = () => {
  const { filteredSongs } = useGlobalContext();

  return (
    <div className="Podcast">
      {filteredSongs?.length > 0 && (
        <div className="Pod">
          {filteredSongs.map((song) => {
            return <CardSong key={song.id} song={song} />;
          })}
        </div>
      )}
    </div>
  );
};

export default SearchScreen;
