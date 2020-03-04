import React, { useContext } from "react";
import { AppContext as appContext } from "../containers/App";
import ProfileHeader from "../containers/Profile/ProfileHeader";
import ProfileTab from "../containers/Profile/ProfileTab";
import ProfilePosts from "../containers/Profile/ProfilePosts";
import ProfilePost from "../containers/Profile/ProfilePost";
import "./ProfilePage.css";

export default function ProfilePage() {
  const { photos = [] } = useContext(appContext);

  return (
    <main className="Profile-main">
      <div className="container">
        <ProfileHeader />
        <ProfileTab />
        <ProfilePosts>
          {photos.map(photo => (
            <ProfilePost key={photo} photo={photo} />
          ))}
        </ProfilePosts>
      </div>
    </main>
  );
}
