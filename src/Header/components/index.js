import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Icon, SideNav, Button, SideNavItem } from 'react-materialize';
import Logo from '../../assets/logo.png';
import ProfileIcon from '../../assets/profile.png';
import Img from '../../assets/signup.png';
import './index.scss';

const Header = () => (
  <Col s={12} className="Navbar">
    <Col m={1}>
      <SideNav
        trigger={
          <Button className="sideMenuButton z-depth-0" style={{backgroundColor: '#3498db'}} m={1}>
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
        <SideNavItem href="/" icon="edit">
          Create Article
        </SideNavItem>
        <SideNavItem href="/profile" icon="perm_identity">
          View My Profile
        </SideNavItem>
        <SideNavItem divider />
        <SideNavItem waves href="#!third" icon="assignment">
          <Link to="/signup">Signup</Link>
        </SideNavItem>
        <SideNavItem waves href="#!third" icon="arrow_left_alt">
          <Link to="/login">Sign In</Link>
        </SideNavItem>
        <SideNavItem waves href="#!third" icon="arrow_right">
          Logout
        </SideNavItem>
      </SideNav>
    </Col>
      <Col className="logo">Authors' Haven</Col>
  </Col>
);

Header.propTypes = {};

export default Header;
