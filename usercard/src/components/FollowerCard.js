import React from "react";

function FollowerCard(props) {
  return (
    <div className="followerCard">
      {props.followerData.map((followers) => {
        return (
          <div className="followers">
            <img src={followers.avatar_url}></img>
            <h5>{followers.login}</h5>
            <h5>{followers.html_url}</h5>
          </div>
        );
      })}
    </div>
  );
}
export default FollowerCard;
