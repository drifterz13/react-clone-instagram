import React, { useContext } from "react";
import { AppContext as appContext } from "../containers/App";
import PostHeader from "./../containers/Posts/PostHeader";
import PostFooter from "./../containers/Posts/PostFooter";
import PostBody from "./../containers/Posts/PostBody";
import "./PostPage.css";

export default function PostPage() {
  const { photos = [] } = useContext(appContext);

  return (
    <div style={{ marginTop: "12%" }}>
      {photos.map(photo => (
        <article key={photo} className="Post">
          <PostHeader />
          <PostBody imageUrl={photo} />
          <PostFooter />
        </article>
      ))}
    </div>
  );
}
