import React from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const users = ["john_doe", "jane_smith", "bob_jones", "javascript "];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user}>
            <Link to={`/user/${user}`}>{user}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
