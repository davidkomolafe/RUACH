import React, { useState } from "react";
import "./Profile.scss";
import ProfileOptions from "./ProfileOptions";
import { firebaseAuth } from "../../config/firebase-config";
import { signOut } from "firebase/auth";

import {
  FaBible,
  FaLanguage,
  FaSignOutAlt,
  FaToggleOff,
  FaToggleOn,
  FaUserEdit,
} from "react-icons/fa";
import { MdDataSaverOn } from "react-icons/md";
// import { BiSolidDonateHeart } from "react-icons/bi";

import Logo from "../../Assets/RuachWeb.png";

const ProfilePage = () => {
  const [dataSaver, setDataSaver] = useState(false);
  const handleClick = () => {
    setDataSaver(!dataSaver);
  };

  return (
    <div className="ProfileSet close">
      <div className="Quotes">
        <div className="Header">
          <FaBible />
          <h3>Today's Bible Verse</h3>
        </div>
        <div className="dailyQuotes">
          <p>
            Psa 27:11 Teach me thy way, O LORD, and lead me in a plain path,
            because of mine enemies.
          </p>{" "}
          <p>
            {" "}
            Psa 27:12 Deliver me not over unto the will of mine enemies: for
            false witnesses are risen up against me, and such as breathe out
            cruelty.
          </p>
          <p>
            Psa 36:9 For with thee is the fountain of life: in thy light shall
            we see light.
          </p>
        </div>
      </div>

      <ProfileOptions icon={<FaUserEdit />} title="Edit Profile" />

      <div className="DataSaver">
        <ProfileOptions icon={<MdDataSaverOn />} title="Data Saver" />

        <div onClick={handleClick}>
          {!dataSaver ? (
            <FaToggleOff className="Toggle" />
          ) : (
            <FaToggleOn className="Toggle" />
          )}
        </div>
      </div>

      <ProfileOptions icon={<FaLanguage />} title="Language" />

      <div onClick={() => signOut(firebaseAuth)}>
        <ProfileOptions icon={<FaSignOutAlt />} title="Log Out" />
      </div>

      {/* <Link to="/give">
        <ProfileOptions icon={<BiSolidDonateHeart />} title="Support Us" />
      </Link> */}

      <div className="LogoV">
        <img className="Rlogo" src={Logo} alt="" />
        <p>
          Every <strong>Tribe,</strong> Every <strong>Tongue,</strong> Every
          <strong> Nation,</strong> Everywhere..
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
