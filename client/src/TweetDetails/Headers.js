// import React from "react";
// import styled from "styled-components";
// import { useCurrentUser } from "../CurrentUserContext";
// import { AiOutlineRetweet } from "react-icons/ai";
// import { FiHeart } from "react-icons/fi";
// import { FiUpload } from "react-icons/fi";
// import { FiBookmark } from "react-icons/fi";

// const Header = ({
//   displayName,
//   username,
//   avatar,
//   timestamp,
//   status,
//   media,
//   handleToggleRetweet,
//   handleToggleLike,
//   isLikedByCurrentUser,
//   isRetweetedByCurrentUser,
//   numOfLikes,
//   numOfRetweets,
// }) => {
//   return (
//     <Wrapper>
//       <Avatar src={avatar} />
//       <Content>
//         <Name>
//           <DisplayName>{displayName}</DisplayName>
//           <Username>@{username}</Username>
//           <Timestamp>{timestamp}</Timestamp>
//         </Name>
//         <Status>{status}</Status>
//         {media.map((media) => (
//           <Media src={media.url}></Media>
//         ))}
//         <ActionBar>
//           <Action>
//             <FiBookmark />
//           </Action>
//           <Action onClick={handleToggleRetweet}>
//             <AiOutlineRetweet />
//           </Action>
//           <Action onClick={handleToggleRetweet}>
//             <FiHeart />
//           </Action>
//           <Action>
//             <FiUpload />
//           </Action>
//         </ActionBar>
//       </Content>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.header`
//   display: flex;
// `;

// const Avatar = styled.img`
//   width: 48px;
//   height: 48px;
//   border-radius: 50%;
// `;

// const Content = styled.div`
//   display: block;
// `;

// const Name = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: row;
//   justify-content: left;
//   padding: 0px 16px;
// `;

// const DisplayName = styled.div`
//   font-size: 15px;
//   line-height: 20px;
//   font-weight: bold;
// `;

// const Username = styled.div`
//   font-size: 15px;
//   margin-left: 7px;
//   line-height: 20px;
//   color: rgb(101, 119, 134);
// `;

// const Timestamp = styled.div`
//   color: rgb(101, 119, 134);
//   font-size: 16px;
// `;

// const Status = styled.div`
//   padding: 3px 16px;
// `;

// const Media = styled.img`
//   width: 100%;
//   margin: 5px 15px;
//   border-radius: 12px;
// `;

// const ActionBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 5px 15px;
// `;

// const Action = styled.button`
//   background-color: none;
//   border: 0px solid;
//   width: 30px;
//   height: 30px;
//   border-radius: 50%;
// `;
// export default Header;
