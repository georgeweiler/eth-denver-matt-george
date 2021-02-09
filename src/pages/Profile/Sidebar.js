import React from 'react';
import styled from 'styled-components';
import { Image, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { CollectionPlay, CameraReels, Wallet } from 'react-bootstrap-icons';
import ProfilePhoto from '../../static/images/Profile-photo.jpeg';

const Sidebar = styled.div`
  min-height: 100vh;
  width: 250px;
  background-color: #333;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;
const NavItem = styled(Nav.Item)`
  width: 100%;
  padding: 5px 20px 5px 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  :hover {
    text-decoration: none;
    color: lightgray;
  }
  &.active {
    background-color: #4f4f4f;
  }
`;
const SidebarLink = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: white;
  padding-left: 15px;
`;

const Profile = () => (
  <>
    <Sidebar>
      <Image className="mt-4" src={ProfilePhoto} width="100px" roundedCircle />
      <h5 className="mt-3">Your Profile</h5>
      <h6 className="mb-4">Matt Martin</h6>
      <NavItem
        className="mt-4"
        as={NavLink}
        to="/profile"
        exact
        activeClassName="active"
      >
        <CollectionPlay color="white" />
        <SidebarLink>Subscriptions</SidebarLink>
      </NavItem>
      <NavItem
        as={NavLink}
        to="/profile/uploads"
        exact
        activeClassName="active"
      >
        <CameraReels color="white" />
        <SidebarLink>Uploads</SidebarLink>
      </NavItem>
      <NavItem as={NavLink} to="/profile/tokens" exact activeClassName="active">
        <Wallet color="white" />
        <SidebarLink>Tokens</SidebarLink>
      </NavItem>
    </Sidebar>
  </>
);

export default Profile;
