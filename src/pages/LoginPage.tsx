import React from "react";
import Header from "../components/Header.jsx";
import Login from "../components/Login.jsx";

const LoginPage = () => {
  return (
    <>
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
    </>
  );
};

export default LoginPage;
