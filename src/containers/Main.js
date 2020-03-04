import React from "react";
import { Router } from "@reach/router";
import PostPage from "../components/PostPage";
import ProfilePage from "../components/ProfilePage";

const Main = () => {
  return (
    <Router>
      <PostPage path="/" />
      <ProfilePage path="/profile" />
    </Router>
  );
};

export default Main;
