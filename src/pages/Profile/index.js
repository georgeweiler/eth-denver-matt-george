import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from './Sidebar';
import Subscriptions from './Subscriptions';
import Tokens from './Tokens';
import Uploads from './Uploads';

const PageWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-content: flex-start;
`;
const MainContent = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
`;

const Profile = () => (
  <>
    <Navbar signedIn />
    <PageWrapper>
      <Sidebar />
      <MainContent>
        <Switch>
          <Route exact path="/profile">
            <Subscriptions />
          </Route>
          <Route path="/profile/uploads">
            <Uploads />
          </Route>
          <Route path="/profile/tokens">
            <Tokens />
          </Route>
        </Switch>
      </MainContent>
    </PageWrapper>
  </>
);

export default Profile;
