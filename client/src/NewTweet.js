import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useCurrentUser } from "./CurrentUserContext";
import { COLORS } from "./constants";

const NewTweet = ({ homeFeedTweets }) => {
  const {
    currentUser,
    getHomeFeed,
    errorMsg,
    setErrorMessage,
  } = useCurrentUser();
  const [value, setValue] = useState("");
  const currentUserAvatar = currentUser["avatarSrc"];
  const [count, setCount] = useState(280);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (value.length > 0) {
      fetch("/api/tweet", {
        method: "POST",
        body: JSON.stringify({ status: value }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // homeFeedTweets.push(data);
          getHomeFeed();
        })
        .catch((error) => {
          setErrorMessage("error");
        });
    }
    setValue("");
  };

  return (
    <Wrapper>
      <AvatarContainer>
        <CurrentUserAvatar src={currentUserAvatar}></CurrentUserAvatar>
      </AvatarContainer>

      <NewTweetBox onSubmit={handleSubmit}>
        <TweetInput
          placeholder="What's happening?"
          onChange={(event) => {
            setValue(event.target.value);
            setCount(280 - value.length);
          }}
        ></TweetInput>
        <TweetCondition>
          {count <= 280 && count > 55 && <CountBlack>{count}</CountBlack>}
          {count <= 55 && count > 0 && <CountOrange>{count}</CountOrange>}
          {count <= 0 && <CountRed>{count}</CountRed>}
          <PostButton type="submit">Meow</PostButton>
        </TweetCondition>
      </NewTweetBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px 0;
  border: 1px solid lightgray;
  display: flex;
  border-bottom: 10px solid lightgray;
`;

const NewTweetBox = styled.form`
  display: flex;
  justify-content: right;
  flex-direction: column;
  margin: 0 15px;
`;

const AvatarContainer = styled.div`
  margin: 0 16px;
  width: 60px;
`;

const CurrentUserAvatar = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const TweetInput = styled.textarea`
  margin-top: 10px;
  resize: none;
  width: 100%;
  width: 500px;
  height: 150px;
  font-size: 18px;
  border: 0px solid;

  &:focus {
    outline: none;
  }
`;

const TweetCondition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountBlack = styled.div`
  margin-right: 30px;
`;

const CountOrange = styled.div`
  margin-right: 30px;
  color: orange;
`;

const CountRed = styled.div`
  margin-right: 30px;
  color: red;
`;

const PostButton = styled.button`
  background-color: ${COLORS.primary};
  color: white;
  height: 35px;
  width: 150px;
  border: 0px;
  border-radius: 30px;
`;

export default NewTweet;
