import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";

import { login, register } from "../../actions/auth";
import "./Profile.scss";

const Profile = ({ auth, login, register }) => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const {
    email,
    firstName,
    lastName,
    address,
    password,
    confirmPassword,
  } = formData;

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (evt) => {
    evt.preventDefault();
    register(formData);
  };

  const handleLogin = (evt) => {
    evt.preventDefault();
    login(formData);
  };

  return (
    <Fragment>
      <h1>Profile</h1>
      {!auth.isAuthenticated ? (
        <Fragment>
          <form>
            <h2>Register</h2>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
              value={email}
            />
            <input
              type="text"
              name="firstName"
              placeholder="firstName"
              onChange={handleChange}
              value={firstName}
            />
            <input
              type="text"
              name="lastName"
              placeholder="lastName"
              onChange={handleChange}
              value={lastName}
            />
            <textarea
              type="text"
              name="address"
              placeholder="address"
              onChange={handleChange}
              value={address}
            ></textarea>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              value={password}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="confirmPassword"
              onChange={handleChange}
              value={confirmPassword}
            />
            <button onClick={handleRegister}>Register</button>
          </form>

          <form>
            <h2>Register</h2>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
              value={email}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              value={password}
            />
            <button onClick={handleLogin}>Login</button>
          </form>
        </Fragment>
      ) : (
        <div>
          <h3>User Logged In</h3>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { login, register })(Profile);
