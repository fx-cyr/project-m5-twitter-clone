import React from "react";
import { useCurrentUser } from "./CurrentUserContext";

const Profile = () => {
  const { currentUser, setCurrentUser } = useCurrentUser();
  const name = currentUser["displayName"];
  console.log(name);
  return <div>{name}</div>;
};

export default Profile;
