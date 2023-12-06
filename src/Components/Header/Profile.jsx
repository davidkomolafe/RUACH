import React, { useState } from "react";
import "./Profile.scss";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../config/firebase-config";

import logo from "../../Assets/user.png";
import ProfilePage from "../../Pages/Profile/ProfilePage";

const Profile = () => {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setUser(currentUser);
    else navigate("/login");
  });

  

  const toGg = (e) => {
    e.preventDefault();
    document.querySelector(".ProfileSet").classList.toggle("close");
  };
  return (
    <div className="profileDiv">
      <img onClick={toGg} className="UserImg " src={logo} alt="" />
      <div className="profileText">
        <h3>Welcome</h3>
        <h3 className="ProfileName">{user?.email}</h3>
      </div>

      <ProfilePage />
    </div>
  );
};

export default Profile;
