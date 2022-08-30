import React from "react";
import PropTypes from "prop-types";

const Likes = (props) => {
  const { handleLikeUnlike, totalLikesCount } = props;
  return (
    <>
      <div className="likeBoxWrapper">
        <h4>{totalLikesCount}k</h4>
        <ul className="likeBtnNav">
          <li>
            <button
              onClick={() => handleLikeUnlike("increment")}
              className="likeBtn"
            >
              <i className="fa fa-caret-up"></i>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLikeUnlike("decrement")}
              className="likeBtn"
            >
              <i className="fa fa-caret-down"></i>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

Likes.propTypes = {
  handleLikeUnlike: PropTypes.func,
  totalLikesCount: PropTypes.number,
};

Likes.defaultProps = {
  handleLikeUnlike: () => {},
  totalLikesCount: 0,
};

export default Likes;
