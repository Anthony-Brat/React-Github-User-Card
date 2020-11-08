import React from "react";
import UserCard from "../components/UserCard";

function UserData(props) {
  return (
    <div>
     <UserCard userData={props.userProps} />
    </div>
  );
}
export default UserData;