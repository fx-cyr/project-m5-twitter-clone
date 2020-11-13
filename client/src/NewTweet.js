import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useCurrentUser } from "./CurrentUserContext";

const NewTweet = ({ homeFeedTweets }) => {
  const { currentUser, getHomeFeed } = useCurrentUser();
  const [value, setValue] = useState("");
  const currentUserAvatar = currentUser["avatarSrc"];
  console.log(homeFeedTweets);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("inside handleSubmiot");
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
          console.log("inside", homeFeedTweets);
        });
    }
    setValue("");
  };
  return (
    <>
      <NewTweetContainer>
        <CurrentUserAvatar src={currentUserAvatar}></CurrentUserAvatar>
        <NewTweetBox onSubmit={handleSubmit}>
          <TweetInput
            placeholder="What's happening?"
            onChange={(event) => {
              setValue(event.target.value);
              console.log(value);
            }}
          ></TweetInput>

          <PostButton type="submit">Meow</PostButton>
        </NewTweetBox>
      </NewTweetContainer>
    </>
  );
};

const NewTweetBox = styled.form`
  display: flex;
  margin: 0 15px;
`;

const CurrentUserAvatar = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const TweetInput = styled.textarea`
  resize: none;
  width: 580px;
  font-size: 18px;
  border: 0px solid;
`;

const PostButton = styled.button`
  display: flex;
  justify-content: right;
`;

const NewTweetContainer = styled.div`
  width: 80%;
  display: flex;
`;

export default NewTweet;