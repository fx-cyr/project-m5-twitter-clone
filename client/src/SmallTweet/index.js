import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineRetweet } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";

const Tweet = ({
  tweet,
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
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const isRetweetedByCurrentUser = isRetweeted;
  const isLikedByCurrentUser = isLiked;
  const [numOfLikes, setNumOfLikes] = useState(null);
  const [numOfRetweets, setNumOfRetweets] = useState(null);

  useEffect(() => {
    setNumOfLikes(numLikes);
    setNumOfRetweets(numRetweets);
  }, [tweet]);

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
            <DisplayName>{displayName}</DisplayName>
            <Username>@{username}</Username>
            <Timestamp>{timestamp}</Timestamp>
          </Name>
          <Status>{status}</Status>
          {media.map((media) => (
            <Media src={media.url} key={Math.random(100000)}></Media>
          ))}
          <ActionBar>
            <Action>
              <FiBookmark />
            </Action>
            <Action>
              <Button onClick={handleToggleRetweet}>
                <AiOutlineRetweet />
              </Button>{" "}
              <Stat>{numOfRetweets}</Stat>
            </Action>
            <Action>
              <Button onClick={handleToggleLike}>
                <FiHeart size="2x" />{" "}
              </Button>
              <Stat>{numOfLikes}</Stat>
            </Action>
            <Action>
              <FiUpload />
            </Action>
          </ActionBar>
        </Content>
      </Header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 80%;
  padding: 16px;
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
`;

const Status = styled.div`
  padding: 3px 16px;
`;

const Media = styled.img`
  width: 100%;
  margin: 5px 15px;
  border-radius: 12px;
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 15px;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: white;
  border: 0px solid;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Stat = styled.div`
  margin-left: 5px;
  font-weight: bold;
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
export default Tweet;
