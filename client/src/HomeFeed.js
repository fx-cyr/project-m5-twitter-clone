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
  } = useCurrentUser();
  const homeFeedTweets = Object.values(currentHomeFeed);

  return (
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
  margin-left: 15px;
`;

export default HomeFeed;
