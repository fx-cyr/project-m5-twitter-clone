import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import HomeFeed from "./HomeFeed";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import TweetDetails from "./TweetDetails";
import Profile from "./Profile";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Router>
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <HomeFeed />
            </Route>
            <Route exact path="/notifications">
              <Notifications />
            </Route>
            <Route exact path="/bookmarks">
              <Bookmarks />
            </Route>
            <Route exact path="/tweet/:tweetId">
              <TweetDetails />
            </Route>
            <Route exact path="/:profileId">
              <Profile />
            </Route>
          </Switch>
        </Router>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: top;
`;

export default App;