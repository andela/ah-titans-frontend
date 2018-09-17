import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Icon, SideNav, Button, SideNavItem } from 'react-materialize';
import ProfileIcon from '../../assets/profile.png';
import Img from '../../assets/signup.png';
import './index.scss';

const Header = () => (
  <Col s={12} className="Navbar blue" style={{ height: '60px' }}>
	
    <Col m={1}>
      <SideNav
        trigger={
          <Button
            className="sideMenuButton z-depth-0 blue"
            m={1}
          >
            <Icon>reorder</Icon>
          </Button>
        }
        options={{ closeOnClick: true }}
      >
        <SideNavItem
          userView
          user={{
            background: Img,
            image: ProfileIcon,
            name: 'John Doe',
            email: 'jdandturk@gmail.com',
          }}
        />
        <SideNavItem href="/" icon="home">
          Home
        </SideNavItem>
        <SideNavItem href="/article" icon="edit">
          Create Article
        </SideNavItem>
        <SideNavItem href="/profile" icon="perm_identity">
          View My Profile
        </SideNavItem>
        <SideNavItem divider />
        <SideNavItem waves href="/signup" icon="assignment">
           Signup
        </SideNavItem>
        <SideNavItem waves href="/login" icon="arrow_left_alt">
          Sign In
        </SideNavItem>
        <SideNavItem waves href="/logout" icon="arrow_right">
          Logout
        </SideNavItem>
      </SideNav>
    </Col>
		<Col className="logo">Authors' Haven</Col>
    
  </Col>
);

Header.propTypes = {};

export default Header;
