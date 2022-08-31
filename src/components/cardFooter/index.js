import React from "react";
import PropTypes from "prop-types";

const ProfileFooter = ({ commentsCount }) => {
  return (
    <>
      <div className="cardFooter">
        <ul className="sharingNav">
          <li>
            <a href="/" className="sharingContentBox">
              <i className="fa fa-comments"></i>
              <span>{commentsCount} comments</span>
            </a>
          </li>
          <li>
            <a href="/" className="sharingContentBox">
              <i className="fa fa-share"></i> <span>Share</span>
            </a>
          </li>
        </ul>
        <span className="btnOption">
          <i className="fa fa-ellipsis-h"></i>
        </span>
      </div>
    </>
  );
};

ProfileFooter.propTypes = {
  commentsCount: PropTypes.number,
};

ProfileFooter.defaultProps = {
  commentsCount: 0,
};

export default ProfileFooter;
