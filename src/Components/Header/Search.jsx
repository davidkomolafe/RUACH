import React from "react";
import "./Search.scss";

import { HiOutlineSearch } from "react-icons/hi";
import { AiFillAudio } from "react-icons/ai";

const Search = () => {
  const toGgg = (e) => {
    e.preventDefault();
    document.querySelector(".searchTab").classList.toggle("close");
  };
  return (
    <div className="searchDiv">
      <div title="Search" className="Search" onClick={toGgg}>
        <HiOutlineSearch />
      </div>

      <input
        type="text"
        className="Input"
        placeholder="Search.."
        autoComplete="off"
        // value={query}
        // onChange={}
        onClick={toGgg}
      />

      <div className="Voice">
        <AiFillAudio />
      </div>
      <div className="searchTab close">
        <ul>
          <li>Arab Worship</li>
          <li>African Worship</li>
          <li>Jewish Worship</li>
          <li>Meditation</li>
          <li>Indian Melody</li>
          <li>Egyptian Classic</li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
