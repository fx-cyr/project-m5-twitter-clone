import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineRetweet } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";

const ActionBar = ({
  isLiked,
  setIsLiked,
  numOfLikes,
  setNumOfLikes,
  numLikes,
  numRetweets,
  tweet,
  id,
  tweetId,
}) => {
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [numOfRetweets, setNumOfRetweets] = useState(null);

  const handleToggleLike = () => {
    const incOrDec = isLiked ? -1 : 1;
    setIsLiked(!isLiked);
    setNumOfLikes(numOfLikes + incOrDec);
    fetch(`/api/tweet/${tweetId}/like`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ like: !isLiked }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          return data;
        }
      });
  };

  const handleToggleRetweet = () => {
    const incOrDec = isRetweeted ? -1 : 1;
    setIsRetweeted(!isRetweeted);
    setNumOfRetweets(numOfRetweets + incOrDec);
    fetch(`/api/tweet/${tweetId}/retweet`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ retweet: !isRetweeted }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          return data;
        }
      });
  };

  return (
    <Wrapper>
      <Action>
        <FiBookmark />
      </Action>
      <Action>
        <Button
          onClick={(tweetId) => {
            handleToggleRetweet(tweetId);
          }}
        >
          <AiOutlineRetweet
            size="2x"
            fill={isRetweeted ? "rgb(224, 36, 94)" : "black"}
          />
        </Button>
        <Stat>{numOfRetweets}</Stat>
      </Action>
      <Action>
        <Button
          onClick={(tweetId) => {
            handleToggleLike(tweetId);
          }}
        >
          <FiHeart
            size="2x"
            fill={isLiked ? "rgb(224, 36, 94)" : "transparent"}
          />
        </Button>
        <Stat>{numOfLikes}</Stat>
      </Action>
      <Action>
        <FiUpload />
      </Action>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

export default ActionBar;
