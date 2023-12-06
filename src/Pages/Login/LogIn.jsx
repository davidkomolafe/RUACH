import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import Logo from "../../Assets/RuachWeb.png";

import { BiLogoWindows } from "react-icons/bi";
import { BiLogoPlayStore } from "react-icons/bi";
import { BiLogoApple } from "react-icons/bi";

import { IoMdArrowDroprightCircle } from "react-icons/io";

const LogIn = () => {
  return (
    <div className="loginC">
      <div className="loginDiv">
        <img className="logo" src={Logo} alt="" />

        <div className="loginText">
          Every <strong>Tribe,</strong> Every <strong>Tongue,</strong> Every
          <strong> Nation,</strong> Everywhere..
        </div>

        <div className="downloadFor">
          <h3>Download for</h3>
          <div className="downloadIcon">
            <BiLogoPlayStore className="playStore" />

            <BiLogoApple className="iOS" />

            <BiLogoWindows className="Windows" />
          </div>
        </div>

        <div className="LoginHere">
          <Link to="/login/auth">
            <div className="Login" to="/auth">
              Login to RUACH <IoMdArrowDroprightCircle className="arrowR" />
            </div>
          </Link>
          <p>
            Enjoy listening to <span>living sounds</span> and
            <span> podcasts</span> FREE on Ruach
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
