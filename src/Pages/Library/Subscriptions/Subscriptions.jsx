import React from "react";

import Header from "../../../Components/Header/Header";
import Left from "../../../Components/Sidebar/Left/Left";
import PlayerBar from "../../../Components/PlayerBar/Play";
import Right from "../../../Components/Sidebar/Right/right";
import SubscriptionsScreen from "./SubscriptionsScreen";
import { MdSubscriptions } from "react-icons/md";

const Subscriptions = () => {
  return (
    <div className="main">
      <Left />
      <Header title="Subscriptions" icon={<MdSubscriptions />} />
      <SubscriptionsScreen />
      <Right />

      <PlayerBar />
    </div>
  );
};

export default Subscriptions;
