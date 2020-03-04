import React from "react";

const ProfileHeader = () => (
  <header className="Profile-header">
    <div>
      <img
        className="img-thumbnail profile-img"
        src="https://picsum.photos/152/152?random"
        alt="random-omg"
      />
    </div>
    <section className="Profile-section">
      <div style={{ display: "flex" }}>
        <span>
          <h3>tsw_ginger</h3>
        </span>
        <button type="button" className="btn btn-light btn-sm edit-btn">
          Edit profile
        </button>
        <span style={{ display: "flex" }}>
          <i
            style={{ alignSelf: "center", fontSize: "20px" }}
            className="fas fa-cog"
          ></i>
        </span>
      </div>

      <div>
        <ul className="Profile-follow">
          <li>16 post</li>
          <li>450 followed</li>
          <li>19 followers</li>
        </ul>
      </div>

      <span>
        <b>cloneinstagram </b>
        'React Clone Instagram'
      </span>
    </section>
  </header>
);

export default ProfileHeader;
