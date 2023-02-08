import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = () => {
  const { user } = useSelector((state) => state.Auth);
  const session = sessionStorage.getItem("user");
  console.log(session);
  console.log("user is", user);
  const islogin = false;
  return <div>{user || session ? <Outlet /> : <Navigate to={"/"} />}</div>;
};

export default ProtectRoute;
