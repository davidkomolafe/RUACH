import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { firebaseAuth, googleProvider } from "../../config/firebase-config";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../Assets/RuachWeb.png";

import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";

const SignupPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(firebaseAuth?.currentUser?.email);

  const onSignup = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();

    await signInWithPopup(firebaseAuth, googleProvider)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="loginC">
      <div className="loginDiv">
        <img className="logo" src={Logo} alt="" />
        <form action="">
          <label>
            <MdEmail />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </label>
          <label>
            <MdLock />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </label>
          <button onClick={onSignup} type="submit">
            Sign up
          </button>
          <p>
            Already have an account?{" "}
            <Link to="/login/auth">
              <span>Login here</span>
            </Link>
          </p>
        </form>
        <ul className="continueWith">
          <li></li>
          <h3>or continue with</h3>
          <li></li>
        </ul>
        <div className="socialLogin">
          <FcGoogle onClick={signInWithGoogle} className="s_Icon" />
          <AiFillFacebook className="s_Icon fb" />
          <AiFillApple className="s_Icon" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
