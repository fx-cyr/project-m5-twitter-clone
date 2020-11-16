import React, { useState, useEffect } from "react";
import { useCurrentUser } from "./CurrentUserContext";
import styled from "styled-components";
import { GrLocation } from "react-icons/gr";
import { FiCalendar } from "react-icons/fi";
import HomeFeed from "./HomeFeed";
import Tweet from "./SmallTweet";
import Loading from "./Loading";
import ErrorPage from "./Error";
import moment from "moment";

const Profile = () => {
  const { currentUser, loadingStatus, errorMsg } = useCurrentUser();
  const [userFeed, setUserFeed] = useState([]);
  const name = currentUser["displayName"];
  const handle = currentUser["handle"];
  const avatarSrc = currentUser["avatarSrc"];
  const bannerSrc = currentUser["bannerSrc"];
  const location = currentUser["location"];
  const joinedDate = currentUser["joined"];
  const bio = currentUser["bio"];
  const numFollowing = currentUser["numFollowing"];
  const numFollowers = currentUser["numFollowers"];
  const isFollowingYou = currentUser["isFollowingYou"];
  const isBeingFollowedByYou = currentUser["isBeingFollowedByYou"];

  const isFollowing = Object.values({ isFollowingYou });
  const trueOrFalse = isFollowing[0];
  let followStatus;
  if (trueOrFalse == false) {
    followStatus = <IsFollowingYou>Follows you</IsFollowingYou>;
  } else {
    followStatus = null;
  }

  useEffect(() => {
    fetch(`/api/${handle}/feed`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setUserFeed(json.tweetsById);
      });
  });
  const userFeedTweets = Object.values(userFeed);

  return (
    <>
      {errorMsg === "error" && <ErrorPage />}
      {loadingStatus === "loading" && <Loading />}
      {loadingStatus === "loaded" && (
        <Wrapper>
          <ImgWrapper>
            <Banner src={bannerSrc}></Banner>
            <Avatar src={avatarSrc}></Avatar>
          </ImgWrapper>
          <InfoWrapper>
            <Name>{name}</Name>
            <UserInfo>
              <Handle>@{handle}</Handle>
              {followStatus}
            </UserInfo>
            <Bio>{bio}</Bio>
            <ProfileHistory>
              <GrLocation />
              <Location>{location}</Location>
              <FiCalendar />
              <JoinedDate>
                Joined {moment(new Date(joinedDate)).format("MMMM YYYY")}
              </JoinedDate>
            </ProfileHistory>
            <FollowStats>
              <Stats>
                <Bold>{numFollowing}</Bold>Following
              </Stats>
              <Stats>
                <Bold>{numFollowers}</Bold>Followers
              </Stats>
            </FollowStats>
          </InfoWrapper>
          <TweetSection>
            {userFeedTweets
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
          </TweetSection>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  margin: 7px;
  border: 1px solid lightgrey;
`;

const ImgWrapper = styled.div`
  position: relative;
  margin-bottom: 12%;
  height: auto;
`;

const Banner = styled.img`
  position: relative;
  width: 100%;
  top: 0px;
  left: 0px;
`;

const Avatar = styled.img`
  position: absolute;
  border: 2px solid white;
  left: 0px;
  top: 70%;
  left: 30px;
  border-radius: 50%;
  width: 19%;
  height: auto;
`;

const InfoWrapper = styled.div`
  padding: 0 35px;
`;

const Name = styled.h2``;

const UserInfo = styled.p`
  display: flex;
`;

const Handle = styled.div`
  font-size: 15px;
  color: rgb(101, 119, 134);
`;

const IsFollowingYou = styled.div`
  margin-left: 10px;
  width: 80px;
  font-size: 13px;
  line-height: 20px;
  color: rgb(101, 119, 134);
  background-color: lightgrey;
  text-align: center;
  border-radius: 4px;
`;

const Bio = styled.div``;

const ProfileHistory = styled.div`
  display: flex;
  margin-top: 15px;
`;

const Location = styled.div`
  margin: 0 15px;
  font-size: 15px;
  color: rgb(101, 119, 134);
`;

const JoinedDate = styled.div`
  margin: 0 15px;
  font-size: 15px;
  color: rgb(101, 119, 134);
`;

const FollowStats = styled.div`
  display: flex;
  margin: 15px 0px;
`;

const Stats = styled.div`
  margin-right: 30px;
  font-size: 15px;
  color: rgb(101, 119, 134);
`;

const Bold = styled.span`
  color: black;
  font-weight: bold;
  margin-right: 6px;
`;

const TweetSection = styled.div`
  padding: 0 15px;
`;

export default Profile;
