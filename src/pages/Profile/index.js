import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import ProfilePhoto from '../../static/images/Profile-photo.jpeg';

const LeftBar = styled.div`
  min-height: 100vh;
  width: 300px;
  background-color: #333;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const Profile = () => (
  <>
    <Navbar signedIn />
    <LeftBar>
      <Image className="mt-4" src={ProfilePhoto} width="100px" roundedCircle />
      <h5 className="mt-3">Your Profile</h5>
      <h7>Matt Martin</h7>
    </LeftBar>
  </>
);

export default Profile;
