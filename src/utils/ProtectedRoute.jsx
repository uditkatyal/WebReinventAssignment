import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashBoardPage from "../pages/DashBoardPage.tsx";
import apiService from "../components/apiService.js";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState({});
  const checkUserToken = () => {
    const userToken = localStorage.getItem("token");
    console.log(userToken);
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      return navigate("/login");
    }
    setIsLoggedIn(true);
    const getData = async () => {
      const responseData = await apiService.getUsers(userToken);
      setData(responseData);
    };
    getData();
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);
  return <div>{isLoggedIn && <DashBoardPage data={data} />}</div>;
};

export default ProtectedRoute;
