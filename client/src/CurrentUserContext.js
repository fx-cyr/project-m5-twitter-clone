import React, { createContext, useContext, useEffect, useState } from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [homeFeedTweets, setHomeFeedTweets] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [currentHomeFeed, setCurrentHomeFeed] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("loading");
  const [userFeed, setUserFeed] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  //fetch current profile
  useEffect(() => {
    fetch("/api/me/profile")
      .then((res) => {
        console.log(loadingStatus);
        return res.json();
      })
      .then((json) => {
        setCurrentUser(json.profile);
        setLoadingStatus("loaded");
        console.log(loadingStatus);
      })
      .catch((error) => {
        setLoadingStatus("error");
        setErrorMsg("error");
      });
  }, []);

  useEffect(() => {
    getHomeFeed();
  }, []);

  const getHomeFeed = () => {
    fetch("/api/me/home-feed")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setLoadingStatus("loaded");

        setCurrentHomeFeed(json.tweetsById);
        setHomeFeedTweets(Object.values(json.tweetsById));
      })
      .catch((error) => {
        setErrorMsg("error");
      });
  };
  // const homeFeedTweets = Object.values(currentHomeFeed);
  console.log(loadingStatus);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        currentHomeFeed,
        homeFeedTweets,
        userFeed,
        loadingStatus,
        setLoadingStatus,
        getHomeFeed,
        errorMsg,
        setErrorMsg,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => {
  return useContext(CurrentUserContext);
};
