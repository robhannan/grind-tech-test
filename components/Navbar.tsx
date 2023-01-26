import { Component } from 'react';
import Image from 'next/image'
import { AccountCircleOutlined, ExpandMoreOutlined } from '@mui/icons-material';
import styled from "styled-components";

const NavbarBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 15px;
`;

const ProfileButton = styled.div`
  
`;

interface Props {
    user: String
};
 
class Navbar extends Component<Props> {
  render(){
    return (
      <NavbarBlock>
         <Image
            src="/logo.svg"
            alt="Grind Logo"
            width={100}
            height={20}
          />
          <ProfileButton>
            <AccountCircleOutlined/>
            {this.props.user}
            <ExpandMoreOutlined/>
          </ProfileButton>
          
      </NavbarBlock>
  )}
};
 
export default Navbar;