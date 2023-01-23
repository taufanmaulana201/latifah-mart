import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./ProtectRoutes";
import { useSelector } from "react-redux";

function App() {
  const [users, setUsers] = useState(null);
  const { user } = useSelector((state) => state.Auth);
  // console.log("users is", users);
  useEffect(() => {
    const myuser = JSON.parse(sessionStorage.getItem("user"));
    setUsers({
      ...users,
      myuser,
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
