import React from "react";
import { useCurrentUser } from "./CurrentUserContext";
import styled from "styled-components";
import { GrLocation } from "react-icons/gr";
import { FiCalendar } from "react-icons/fi";
import HomeFeed from "./HomeFeed";
import Tweet from "./SmallTweet";

const Profile = () => {
  const { currentUser, setCurrentUser, userFeedTweets } = useCurrentUser();
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

  return (
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
          <JoinedDate>Joined {joinedDate}</JoinedDate>
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
    </Wrapper>
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

export default Profile;
