import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Tweet = ({
  status,
  displayName,
  username,
  avatar,
  media,
  timestamp,
  handleToggleLike,
  handleToggleRetweet,
  numOfLikes,
  setNumOfLikes,
  numOfRetweets,
  setNumOfRetweets,
  isLikedByCurrentUser,
  isRetweetedByCurrentUser,
}) => {
  return (
    <Wrapper>
      <Header
        displayName={displayName}
        username={username}
        avatar={avatar}
        timestamp={timestamp}
        status={status}
        media={media}
        handleToggleLike={handleToggleLike}
        handleToggleRetweet={handleToggleLike}
        numOfLikes={numOfLikes}
        numOfRetweets={numOfRetweets}
        setNumOfLikes={setNumOfLikes}
        setNumOfRetweets={setNumOfRetweets}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 16px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

const StatsWrapper = styled.div`
  color: rgb(101, 119, 134);
  display: flex;
  align-items: center;
  justify-content: left;
  height: 48px;
`;

const Stats = styled.div`
  align-items: center;
  margin-right: 12px;
`;

const Bold = styled.span`
  color: black;
  font-weight: bold;
`;

export default Tweet;
