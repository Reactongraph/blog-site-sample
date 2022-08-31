import React from "react";
import PropTypes from "prop-types";

const ProfileHeader = ({ userDetails }) => {
  const { lastSeen, name, picture } = userDetails || {};
  return (
      <div className="cardHeader">
        <ul className="headerNav">
          <li>
            <div className="userImg">
              <img src={picture} alt="icon" />
            </div>
          </li>
          <li>
            <h3 className="userName">{name}</h3>
          </li>
          <li>
            <span className="userTime">{lastSeen}</span>
          </li>
        </ul>
      </div>
  );
};

ProfileHeader.propTypes = {
  userDetails: PropTypes.object,
};

ProfileHeader.defaultProps = {
  userDetails: {},
};

export default ProfileHeader;
