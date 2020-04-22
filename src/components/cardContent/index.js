import React from "react";
import PropTypes from "prop-types";

function ProfileContent({ postContent }) {
  const {
    title, detail, image,
    description, viewCount
  } = postContent;
  return (
    <>
      <div className="cardBody">
        <h2 className="bodyHeader">{title}</h2>
        <div className="bodyContent">
          <p>{description}</p>
          <p>{detail}</p>
        </div>
        <div className="bodyImg">
          <img src={image} alt="img" />
          <div className="viewbtn">
            <i className="fa fa-eye"></i>{" "}
            <span className="countView">{viewCount}</span>
          </div>
        </div>
      </div>
    </>
  );
}


ProfileContent.propTypes = {
  postContent: PropTypes.object,
};

ProfileContent.defaultProps = {
  postContent: {},
};

export default ProfileContent;
