import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { username } = useParams();

  return (
    <div>
      <p>User Profile</p>
      <h1>Username: {username}</h1>
      <span>User list completed</span>
    </div>
  );
};

export default UserProfile;
