import React from "react";

import "./Profile.scss";

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <h2>Register</h2>
      <form>
        <input type="email" name="email" placeholder="email" />
        <input type="text" name="firstName" placeholder="firstName" />
        <input type="text" name="lastName" placeholder="lastName" />
        <textarea type="text" name="address" placeholder="address"></textarea>
        <input type="password" name="password" placeholder="password" />
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirmPassword"
        />
      </form>
      <h2>Register</h2>
      <form>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
      </form>
    </div>
  );
};

export default Profile;
