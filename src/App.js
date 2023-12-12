import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import UserList from "./pages/UserList";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">User List</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/users" exact element={<UserList />} />

        <Route path="/user/:username" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
