import React from "react";
import FollowerCard from "../components/FollowerCard";

function FollowerData(props) {
  return (
    <div>
     <FollowerCard followerData={props.followersProps} />
    </div>
  );
}
export default FollowerData;