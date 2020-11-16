import React from "react";
import { useCurrentUser } from "./CurrentUserContext";
import Tweet from "./SmallTweet";
import styled from "styled-components";
import NewTweet from "./NewTweet";
import Loading from "./Loading";
import ErrorPage from "./Error";

const HomeFeed = () => {
  const {
    currentHomeFeed,
    loadingStatus,
    currentUser,
    homeFeedTweets,
    errorMsg,
  } = useCurrentUser();
  const currentUserAvatar = currentUser["avatarSrc"];

  return (
    <>
      {errorMsg === "error" && <ErrorPage />}
      {loadingStatus === "loading" && <Loading />}
      {loadingStatus === "loaded" && (
        <Wrapper>
          <Title>Home</Title>
          <NewTweet homeFeedTweets={homeFeedTweets} />
          {homeFeedTweets
            .map((tweet) => {
              return (
                <Tweet
                  tweetId={tweet.id}
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
                  isLiked={tweet.isLiked}
                />
              );
            })
            .reverse()}
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  margin: 20px;
  border: 1px solid lightgrey;
`;

const Title = styled.h2``;

export default HomeFeed;
