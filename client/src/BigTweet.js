import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineRetweet } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import ActionBar from "./SmallTweet/ActionBar";
import { useHistory } from "react-router-dom";
import moment from "moment";

const BigTweet = ({ tweetDetails }) => {
  const [isLiked, setIsLiked] = useState(tweetDetails.isLiked);
  const [numOfLikes, setNumOfLikes] = useState(tweetDetails.numLikes);
  const [isRetweeted, setIsRetweeted] = useState(tweetDetails.isRetweeted);
  const [numOfRetweets, setNumOfRetweets] = useState(tweetDetails.numRetweets);
  return (
    <Wrapper>
      <Header>
        <Avatar src={tweetDetails.author.avatarSrc} />
        <Name>
          <DisplayName>{tweetDetails.author.displayName}</DisplayName>
          <Username>@{tweetDetails.author.handle}</Username>
        </Name>
      </Header>
      <Content>
        <Status>{tweetDetails.status}</Status>
        {tweetDetails.media.map((media) => (
          <Media src={media.url}></Media>
        ))}
        <Timestamp>
          {" "}
          {moment(new Date(tweetDetails.timestamp)).format(
            "h:mm a, MMM Do YYYY"
          )}
        </Timestamp>
        <Divider />
        <ActionBar
          isLiked={isLiked}
          setIsLiked={setIsLiked}
          numOfLikes={numOfLikes}
          setNumOfLikes={setNumOfLikes}
          isRetweeted={isRetweeted}
          setIsRetweeted={setIsRetweeted}
          numOfRetweets={numOfRetweets}
          setNumOfRetweets={setNumOfRetweets}
          tweetId={tweetDetails.id}
        />
      </Content>
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

const Header = styled.header`
  display: flex;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const Content = styled.div``;

const Name = styled.div`
  padding: 0 15px;
`;

const DisplayName = styled.div`
  font-size: 18px;
  line-height: 20px;
  font-weight: bold;
`;

const Username = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: rgb(101, 119, 134);
`;

const Timestamp = styled.div`
  padding-top: 15px;
  color: rgb(101, 119, 134);
  font-size: 16px;
`;

const Status = styled.div`
  padding: 15px 0;
  font-size: 22px;
`;

const Media = styled.img`
  width: 100%;
  margin: 5px 0px;
  border-radius: 12px;
`;

const Divider = styled.div`
  border-bottom: 1px solid lightgray;
  margin: 30px 0;
`;

export default BigTweet;
