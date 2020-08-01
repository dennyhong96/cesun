import React, { useState } from "react";

import "./Profile.scss";

const Profile = () => {
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
  };

  const handleLogin = (evt) => {
    evt.preventDefault();
  };

  return (
    <div>
      <h1>Profile</h1>
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
    </div>
  );
};

export default Profile;
