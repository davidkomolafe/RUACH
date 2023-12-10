import React, { useState } from "react";
import "./Search.scss";

import { HiOutlineSearch } from "react-icons/hi";

import { IoMdMic } from "react-icons/io";
import { MdChevronLeft, MdClose } from "react-icons/md";

const Search = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

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
        <IoMdMic />
      </div>

      <div className="searchTab close">
        <div className="SearchHeader">
          <span className="hLeft">
            <MdChevronLeft onClick={toGgg} />

            <input
              type="text"
              autoComplete="off"
              placeholder="Search"
              value={search}
              onChange={handleChange}
            />
            <MdClose onClick={() => setSearch("")} />
          </span>
          <span className="hRight">
            <IoMdMic />
          </span>
        </div>
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
