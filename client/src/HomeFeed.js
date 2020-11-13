import React from "react";
import { useCurrentUser } from "./CurrentUserContext";
import Tweet from "./SmallTweet";
import styled from "styled-components";
import NewTweet from "./NewTweet";

const HomeFeed = () => {
  const {
    currentHomeFeed,
    loadingStatus,
    currentUser,
    homeFeedTweets,
  } = useCurrentUser();
  const currentUserAvatar = currentUser["avatarSrc"];
  console.log(homeFeedTweets);

  return loadingStatus === "Loading..." ? (
    "loading"
  ) : (
    <Wrapper>
      <Title>Home</Title>
      <NewTweet homeFeedTweets={homeFeedTweets} />
      {homeFeedTweets
        .map((tweet) => {
          return (
            <Tweet
              key={Math.random(1000000)}
              tweet={tweet}
              status={tweet.status}
              displayName={tweet.author.displayName}
              username={tweet.author.handle}
              avatar={tweet.author.avatarSrc}
              media={tweet.media}
              timestamp={tweet.timestamp}
              numLikes={tweet.numLikes}
              numRetweets={tweet.numRetweets}
              retweetFrom={tweet.retweetFrom}
            />
          );
        })
        .reverse()}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 0 15px;
  border: 1px solid lightgrey;
`;

const Title = styled.h2``;

export default HomeFeed;
