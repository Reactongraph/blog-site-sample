import React, { useState } from "react";
import PropTypes from "prop-types";
import ProfileHeader from "../../components/cardHeader";
import Likes from "../../components/cardLikes";
import ProfileContent from "../../components/cardContent";
import ProfileFooter from "../../components/cardFooter";

function Card(props) {
  const {
    totalLikes, userDetails, postContent, comments,
  } = props.post;
  const [totalLikesCount, setTotalLikes] = useState(totalLikes);

  function handleLikeUnlike(actionType) {
    if (actionType === "increment") {
      setTotalLikes(totalLikesCount + 1);
    } else {
      setTotalLikes(totalLikesCount - 1);
    }
  }

  return (
    <div className="cardBx">
      <Likes
        handleLikeUnlike={handleLikeUnlike}
        totalLikesCount={totalLikesCount}
      />
      <ProfileHeader userDetails={userDetails} />
      <ProfileContent postContent={postContent} />
      <ProfileFooter comments={comments} />
    </div>
  );
}

Card.propTypes = {
  post: PropTypes.object,
};

Card.defaultProps = {
  post: {},
};

export default Card;
