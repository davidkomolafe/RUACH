import React, { useState } from "react";
import { firebaseAuth, googleProvider } from "../../config/firebase-config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Logo from "../../Assets/RuachWeb.png";
import "./Login.scss";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";

const LoginPage = ({ setAuth }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      toast("login success");
      alert("go");
    } catch (err) {
      toast.error("Incorrect Details");
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       navigate("/");
  //       console.log(user);
  //     })

  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

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
          <button onClick={onLogin} type="submit">
            Login
          </button>
          <Link to="/password-reset" className="f-p">
            Forgot Password?
          </Link>
          <p>
            Don't have an account yet?{" "}
            <Link to="/signup/auth">
              <span>Sign Up</span>
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
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default LoginPage;
