import React from "react";
import { useCurrentUser } from "./CurrentUserContext";
import Tweet from "./SmallTweet";
import styled from "styled-components";

const HomeFeed = () => {
  const {
    currentHomeFeed,
    handleToggleLike,
    handleToggleRetweet,
    numOfLikes,
    setNumOfLikes,
    numOfRetweets,
    setNumOfRetweets,
    isLikedByCurrentUser,
    isRetweetedByCurrentUser,
    loadingStatus,
  } = useCurrentUser();
  const homeFeedTweets = Object.values(currentHomeFeed);
  console.log(loadingStatus);

  return loadingStatus === "Loading..." ? (
    "loading"
  ) : (
    <Wrapper>
      {homeFeedTweets.map((tweet) => {
        if (tweet.author.isBeingFollowedByYou) {
          return (
            <Tweet
              status={tweet.status}
              displayName={tweet.author.displayName}
              username={tweet.author.handle}
              avatar={tweet.author.avatarSrc}
              media={tweet.media}
              timestamp={tweet.timestamp}
            />
          );
        }
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 0 15px;
  border: 1px solid lightgrey;
`;

export default HomeFeed;
