import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { useCurrentUser } from "../CurrentUserContext";
import ErrorPage from "../Error";
import Loading from "../Loading";
import BigTweet from "../BigTweet";

const TweetDetails = () => {
  const {
    loadingStatus,
    setLoadingStatus,
    errorMsg,
    setErrorMsg,
  } = useCurrentUser();
  const [tweetDetails, setTweetDetails] = useState(null);
  let { tweetId } = useParams();

  useEffect(() => {
    if (tweetId) {
      fetch(`/api/tweet/${tweetId}`)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setTweetDetails(json.tweet);
        })
        .then(() => {
          setLoadingStatus("loaded");
        })
        .catch((error) => {
          setErrorMsg("error");
        });
    }
  });

  return (
    <>
      {errorMsg === "error" && <ErrorPage />}
      {loadingStatus === "loading" ? (
        <Loading />
      ) : (
        tweetDetails && <BigTweet tweetDetails={tweetDetails} />
      )}
    </>
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

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 15px;
`;

const Action = styled.button`
  background-color: none;
  border: 0px solid;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Divider = styled.div`
  border-bottom: 1px solid lightgray;
  margin: 30px 0;
`;

export default TweetDetails;
