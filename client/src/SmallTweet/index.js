import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineRetweet } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import ActionBar from "./ActionBar";
import { useHistory } from "react-router-dom";
import moment from "moment";

const Tweet = ({
  tweet,
  tweetId,
  status,
  displayName,
  username,
  avatar,
  media,
  timestamp,
  numLikes,
  numRetweets,
  retweetFrom,
}) => {
  const [isLiked, setIsLiked] = useState(tweet.isLiked);
  const [numOfLikes, setNumOfLikes] = useState(tweet.numLikes);
  const [isRetweeted, setIsRetweeted] = useState(tweet.isRetweeted);
  const [numOfRetweets, setNumOfRetweets] = useState(tweet.numRetweets);
  const history = useHistory();
  const handleHandleClick = () => {
    history.push(`/${username}`);
  };
  const handleTweetClick = () => {
    history.push(`/tweet/${tweetId}`);
  };

  return (
    <Wrapper>
      {retweetFrom ? (
        <RetweetFromContainer>
          <AiOutlineRetweet />
          <RetweetFrom>{retweetFrom.displayName} remeowed</RetweetFrom>
        </RetweetFromContainer>
      ) : null}
      <Header>
        <Avatar src={avatar} />
        <Content>
          <Name>
            <DisplayName
              tabIndex="0"
              aria-label="Visit the user's page"
              onClick={handleHandleClick}
            >
              {displayName}
            </DisplayName>
            <Username>@{username}</Username>
            {/* <Timestamp>{timestamp}</Timestamp> */}
            <Timestamp>
              {moment(new Date(timestamp)).format("MMM Do")}
            </Timestamp>
          </Name>
          <Status
            tabIndex="0"
            aria-label="View tweet"
            onClick={handleTweetClick}
          >
            {status}
          </Status>
          {media.map((media) => (
            <Media
              tabIndex="0"
              aria-label="View tweet"
              onClick={handleTweetClick}
              src={media.url}
              key={Math.random(100000)}
            ></Media>
          ))}
          <ActionBar
            isLiked={isLiked}
            setIsLiked={setIsLiked}
            numOfLikes={numOfLikes}
            setNumOfLikes={setNumOfLikes}
            isRetweeted={isRetweeted}
            setIsRetweeted={setIsRetweeted}
            numOfRetweets={numOfRetweets}
            setNumOfRetweets={setNumOfRetweets}
            tweetId={tweet.id}
          />
          {/* <ActionBar>
            <Action>
              <FiBookmark />
            </Action>
            <Action>
              <Button onClick={handleToggleRetweet}>
                <AiOutlineRetweet />
              </Button>{" "}
            </Action>
            <Action>
              <Button
                onClick={(tweetId) => {
                  handleToggleLike(tweetId);
                }}
              >
                <FiHeart
                  size="2x"
                  fill={likedTweet ? "rgb(224, 36, 94)" : undefined}
                />
              </Button>
              <Stat>{numOfLikes}</Stat>
            </Action>
            <Action>
              <FiUpload />
            </Action>
          </ActionBar> */}
        </Content>
      </Header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-right: 16px;
  background: white;
  margin: 16px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

const Header = styled.header`
  display: flex;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
const RetweetFromContainer = styled.div`
  display: flex;
  margin-left: 30px;
  margin-bottom: 15px;
`;
const RetweetFrom = styled.div`
  color: rgb(101, 119, 134);
  padding: 0 7px;
`;

const Content = styled.div`
  display: block;
`;

const Name = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding: 0px 16px;
`;

const DisplayName = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Username = styled.div`
  font-size: 15px;
  margin-left: 7px;
  line-height: 20px;
  color: rgb(101, 119, 134);
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  margin-left: 10px;
`;

const Status = styled.div`
  padding: 3px 16px;
  &:hover {
    cursor: pointer;
  }
`;

const Media = styled.img`
  width: 100%;
  margin: 5px 15px;
  border-radius: 12px;
  &:hover {
    cursor: pointer;
  }
`;

// const ActionBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 5px 15px;
// `;

// const Action = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Button = styled.button`
//   background-color: white;
//   border: 0px solid;
//   width: 30px;
//   height: 30px;
//   border-radius: 50%;
// `;

// const Stat = styled.div`
//   margin-left: 5px;
//   font-weight: bold;
// `;
// const RetweetFromContainer = styled.div`
//   display: flex;
//   margin-left: 30px;
//   margin-bottom: 15px;
// `;
// const RetweetFrom = styled.div`
//   color: rgb(101, 119, 134);
//   padding: 0 7px;
// `;
export default Tweet;
