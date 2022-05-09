import React from "react";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

import Nav from "../Nav";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans (Current Plan :Standard)</h3>
              <h4>Renewal Date:04/05/2022</h4>

              <div className="profileScreen_inner">
                <div className="profileScreen_innerInfo">
                  <h5>Netflix Basic</h5>
                  <h6>480p</h6>
                </div>
                <button className="button1">Subscribe</button>
              </div>
              <div className="profileScreen_inner">
                <div className="profileScreen_innerInfo">
                  <h5>Netflix Standard</h5>
                  <h6>1080p</h6>
                </div>
                <button className="button2">Current Plan</button>
              </div>
              <div className="profileScreen_inner">
                <div className="profileScreen_innerInfo">
                  <h5>Netflix Premium</h5>
                  <h6>4K+HDR</h6>
                </div>
                <button className="button1">Subscribe</button>
              </div>

              <button
                onClick={() => auth.signOut()}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
