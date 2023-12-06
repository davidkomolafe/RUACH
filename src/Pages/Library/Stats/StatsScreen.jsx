import React from "react";
import "./Stats.scss";
import icon from "../../../Assets/g.gif";

import TopPlaylist from "./TopPlaylist";

const StatsScreen = () => {
  return (
    <div className="StatsDiv">
      <div className="StatsTop">
        <div className="Top-Left">
          <ul className="StatsTab">
            <li>
              <h5>FOLLOWING</h5>
              <h3>34</h3>
            </li>
            <li>
              <h5>TOTAL PLAYS</h5>
              <h3>52.1k</h3>
            </li>
            <li>
              <h5>LIKED SONGS</h5>
              <h3>3.6k</h3>
            </li>

            <li>
              <h5>FAVOURITE SONG</h5>
              <h3>Ruach Elohim</h3>
            </li>
            <li>
              <h5>FAVOURITE ARTIST</h5>
              <h3>Theophilus Sunday</h3>
            </li>
          </ul>
          <div className="StatsCont">
            <TopPlaylist />
            <div className="FavSong">
              <h3>92%</h3>
              <p>songs listened to are by Theophilus Sunday</p>
            </div>
            <div className="FavArtist">
              <h3>26%</h3>
              <p>songs listened to are by Theophilus Sunday</p>
            </div>
          </div>
        </div>
        <div className="globe">
          <img src={icon} alt="" />
          <li className="TotalUsers">
            <h5>Total Users</h5>
            <h2>1.17M</h2>
          </li>
          <li className="TotalSongs">
            <h5>Total Songs</h5>
            <h2>30.4k</h2>
          </li>
          <li className="U_Age">
            <h4>Users By Age</h4>
          </li>
          <li className="U_Demo">
            <h4>Users By Demography</h4>
          </li>
        </div>
      </div>
      <div className="StatsBottom">
        <div className="Bottom-Left">
          <h3>Top Played Song</h3>
          <div className="TopMix">
            <div className="StatsCont">
              <div className="BottomSong">
                <ul className="SongHeader">
                  <li>#</li>
                  <li>TITLE</li>
                  <li>PLAYS</li>
                </ul>
                <div className="SongBody">
                  <ul>
                    <li>1</li>
                    <li>Show us the Ancient Paths</li>
                    <li>3,200</li>
                  </ul>
                  <ul>
                    <li>2</li>
                    <li>Oh Find Me Lord</li>
                    <li>1,600</li>
                  </ul>
                  <ul>
                    <li>3</li>
                    <li>This Is the place of encounter</li>
                    <li>1,200</li>
                  </ul>
                  <ul>
                    <li>4</li>
                    <li>Healing Sounds</li>
                    <li>700</li>
                  </ul>
                  <ul>
                    <li>5</li>
                    <li>Fountain that never runs dry</li>
                    <li>500</li>
                  </ul>
                  <ul>
                    <li>6</li>
                    <li>AGABA</li>
                    <li>200</li>
                  </ul>
                  <ul>
                    <li>7</li>
                    <li>Spirit_Of_Prophecy</li>
                    <li>180</li>
                  </ul>
                  <ul>
                    <li>8</li>
                    <li>Take it Away</li>
                    <li>100</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="TopMix"></div>
        </div>
        <div className="Bottom-Right">
          <ul>
            <li>Top Artist</li>
            <li>Times Played</li>
            <li>By Month</li>
          </ul>
          <div className="Data">GOD</div>
        </div>
      </div>
    </div>
  );
};

export default StatsScreen;
