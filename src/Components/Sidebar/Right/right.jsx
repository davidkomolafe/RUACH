import React from "react";
import "./right.scss";
import QCard from "./Queue/QCard";

const right = () => {
  const toGg = (e) => {
    e.preventDefault();
    document.querySelector(".Lyrics").classList.toggle("close");
  };
  const toGl = (e) => {
    e.preventDefault();
    document.querySelector(".QueueList").classList.toggle("close");
  };
  return (
    <div className="rightS">
      <div className="QueueDiv">
        <h3 className="QueueMenu" onClick={toGl}>
          Queue
        </h3>
        <div className="QueueList">
          <QCard />
          <QCard />
          <QCard />
          <QCard />
          <QCard />
          <QCard />
          <QCard />
          <QCard />
        </div>
      </div>
      <div className="QueueDiv">
        <h3 className="LyricsMenu" onClick={toGg}>
          Lyrics
        </h3>
        <div className="Lyrics">
          <p>
            Tongues <br></br> Lift your hands Anybody ready for something here{" "}
            <br></br>Lord I’m hungry For revival For your outpouring For fresh
            fire <br></br>Tongues <br></br>Anybody ready<br></br> Tongues{" "}
            <br></br>Open your mouth and just let the Lord know you’re hungry
            <br></br>Lord I’m hungry For revival For your outpouring For fresh
            fire <br></br>Tongues <br></br>Just open your mouth people and get
            set to receive something from God today, get set, get set today
            <br></br>
            Tongues <br></br>Mantles are falling Fresh fire is burning The oil
            is dropping The hand of God is here <br></br>Lord I’m hungry For
            revival For your outpouring For fresh fire<br></br> Mantles are
            falling Fresh fire is burning The oil is dropping The hand of God is
            here, the hand of God is here<br></br> Tongues <br></br>Lord I’m
            ready For your power For your anointing For fresh fire Mantles are
            falling Fresh fire is burning The oil is dropping The hand of God is
            here<br></br> Tongues <br></br>Open your mouth and pray in the
            spirit pray in the spirit <br></br>Tongues<br></br>Mantles are
            falling I see apostolic mantles Fresh fire is burning Prophetic
            mantles The oil is dropping I see evangelistic mantles The hand of
            God is here Pastoral mantles, teaching mantles Mantles are falling
            Healing mantles, falling Fresh fire is burning Deliverance mantles,
            financial mantles The oil is dropping I see them falling right now
            The hand of God is here Receive, lift your hands <br></br>Mantles
            are falling Receive, open your mouths Fresh fire is burning Receive,
            <br></br>Tongues<br></br>The oil is dropping Tongues The hand of God
            is here <br></br>Mantles are falling Fresh fire is burning The oil
            is dropping The hand of God is here
          </p>
        </div>
      </div>
    </div>
  );
};

export default right;
