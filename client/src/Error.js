import React from "react";
import styled from "styled-components";
import { u1F4A3 as bomb } from "react-icons-kit/noto_emoji_regular/u1F4A3";
import { Icon } from "react-icons-kit";

const ErrorPage = () => {
  return (
    <Wrapper>
      <Icon icon={bomb} size={100} />
      <Subtitle>An unknown error has occured</Subtitle>
      <Text>
        Please try refreshing the page, or <a href="#">contact support</a> if
        the problem persists
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Subtitle = styled.h2``;

const Text = styled.p``;
export default ErrorPage;
