import { Component } from 'react';
import Image from 'next/image'
import { AccountCircleOutlined, ExpandMoreOutlined, Menu } from '@mui/icons-material';
import styled from "styled-components";

const NavbarBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: var(--grind-pink);
`;

const ProfileButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileName = styled.span`
  margin-left: 1rem;
  margin-right: 1rem;
`

interface LogoProps {
  portrait?: Boolean;
};

const LogoWrapper = styled.div<LogoProps>`
  display: flex;
  flex: 1;
  justify-content: ${props => props.portrait ? 'center' : 'flex-start'};
`;

const MenuWrapper = styled.div<LogoProps>`
  margin-left: 1rem;
`;

interface Props {
    user: String;
    portrait?: Boolean;
};
 
class Navbar extends Component<Props> {
  render(){
    return (
      <NavbarBlock>
        {this.props.portrait &&
          <MenuWrapper><Menu/></MenuWrapper> 
        }
        <LogoWrapper {...this.props}>
          <Image
            src="/logo.svg"
            alt="Grind Logo"
            width={100}
            height={20}
          />
        </LogoWrapper>
        {!this.props.portrait &&
          <ProfileButton>
            <AccountCircleOutlined/>
            <ProfileName>{this.props.user}</ProfileName>
            <ExpandMoreOutlined/>
          </ProfileButton>
        }
      </NavbarBlock>
    )
  }
};
 
export default Navbar;