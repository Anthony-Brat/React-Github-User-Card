import React from "react";

function UserCard(props) {
  return (
    <div className="UserCard">
      <img src={props.userData.avatar_url}></img>
      <h1>{props.userData.name}</h1>
      <h4>{props.userData.bio}</h4>
      <h4>{props.userData.html_url}</h4>
      <h6>Following: {props.userData.following}</h6>
      <h6>Followers: {props.userData.followers}</h6>
      
    </div>
  )
}
export default UserCard;
