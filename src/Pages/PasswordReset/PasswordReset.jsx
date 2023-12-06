// import React from "react";
import React, { useState } from "react";

import { sendPasswordResetEmail } from "firebase/auth";
import { firebaseAuth } from "../../config/firebase-config";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../Assets/RuachWeb.png";

const PasswordReset = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [password, setPassword] = useState("");
  // console.log(firebaseAuth?.currentUser?.email);

  const onReset = async (e) => {
    e.preventDefault();

    // setMessage("Check");
    await sendPasswordResetEmail(firebaseAuth, email)
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

  // useEffect(() => {
  //   if (loading) return;
  //   if (user) navigate("/dashboard");
  // }, [user, loading]);

  // const signInWithGoogle = async (e) => {
  //   e.preventDefault();

  //   await signInWithPopup(firebaseAuth, googleProvider)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       navigate("/");
  //       console.log(user);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  return (
    <div className="loginC">
      <div className="loginDiv">
        <img className="logo" src={Logo} alt="" />
        <form action="">
          <h3>Password Reset</h3>
          <p className="pwd-rst">
            Kindly enter your email address, or your{" "}
            <strong> Ruach username.</strong> We will send you an email with a
            link to reset your password.
          </p>
          <label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email or Username"
            />
          </label>
          <button type="submit" onClick={onReset}>
            Continue
          </button>
          <Link to="/login/auth" className="f-p">
            Login?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
