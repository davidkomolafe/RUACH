import React from "react";

import Header from "../../Components/Header/Header";
import Left from "../../Components/Sidebar/Left/Left";
import PlayerBar from "../../Components/PlayerBar/Play";
import Right from "../../Components/Sidebar/Right/right";
import SearchScreen from "./SearchScreen";

const SearchPage = () => {
  return (
    <div className="main">
      <Left />
      <Header title="Search Results" />
      <SearchScreen />
      <Right />
      <PlayerBar />
    </div>
  );
};

export default SearchPage;
