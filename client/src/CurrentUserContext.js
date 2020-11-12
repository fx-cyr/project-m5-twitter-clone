import React, { createContext, useContext, useEffect, useState } from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState([]);
  const [currentHomeFeed, setCurrentHomeFeed] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("loading");
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const isRetweetedByCurrentUser = isRetweeted;
  const isLikedByCurrentUser = isLiked;
  const [numOfLikes, setNumOfLikes] = useState(0);
  const [numOfRetweets, setNumOfRetweets] = useState(0);
  const [userFeed, setUserFeed] = useState([]);

  //fetch current profile
  useEffect(() => {
    fetch("/api/me/profile")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setCurrentUser(json.profile);
        setLoadingStatus("ready to view");
        console.log(loadingStatus);
      });
  }, []);

  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setCurrentHomeFeed(json.tweetsById);
      });
  }, []);

  const homeFeedTweets = Object.values(currentHomeFeed);

  const handleToggleLike = () => {
    if (!isLiked) {
      setIsLiked(true);
      setNumOfLikes(numOfLikes + 1);
      console.log("+1");
    } else {
      setIsLiked(false);
      setNumOfLikes(numOfLikes - 1);
      console.log("-1");
    }
  };

  const handleToggleRetweet = () => {
    if (!isRetweeted) {
      setIsRetweeted(true);
      setNumOfRetweets(numOfRetweets + 1);
      console.log("+1");
    } else {
      setIsRetweeted(false);
      setNumOfRetweets(numOfRetweets - 1);
      console.log("-1");
    }
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        currentHomeFeed,
        homeFeedTweets,
        handleToggleLike,
        handleToggleRetweet,
        numOfLikes,
        setNumOfLikes,
        numOfRetweets,
        setNumOfRetweets,
        isLikedByCurrentUser,
        isRetweetedByCurrentUser,
        userFeed,
        setUserFeed,
        loadingStatus,
        setLoadingStatus,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => {
  return useContext(CurrentUserContext);
};
