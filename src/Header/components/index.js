import React from 'react';
import { Link, } from 'react-router-dom';
import {
	Col, Icon, SideNav, Button, SideNavItem,
} from 'react-materialize';
import ProfileIcon from '../../assets/profile.png';
import Img from '../../assets/signup.png';
import './index.scss';

const HeaderComponent = user => (
	<Col s={12} className="Navbar blue" style={{ height: '60px' }}>
		<Col m={1}>
			<SideNav
				trigger={(
					<Button className="sideMenuButton z-depth-0 blue" m={1}>
						<Icon>reorder</Icon>
					</Button>
				)}
				options={{ closeOnClick: true }}
			>
				{user.user.username ? (
					<SideNavItem
						userView
						user={{
							background: Img,
							image: ProfileIcon,
							name: `${user.user.username}`,
							email: `${user.user.email}`,
						}}
					/>
				) : (
					''
				)}
				
				  <Link to="/">
					  <SideNavItem icon="home">
					    Home
						</SideNavItem>
					</Link>
				
				
				{user.user.username && (
					<React.Fragment>
						<Link to="/article">
							<SideNavItem icon="edit">
								Create Article
							</SideNavItem>
						</Link>
						<Link to={`/profile/${user.user.username}`}>
							<SideNavItem
								icon="perm_identity">
								View My Profile
							</SideNavItem>
						</Link>
					</React.Fragment>
				)}
				
				<SideNavItem divider />
				{!user.user.username ? (
					<React.Fragment>
						<Link to='/signup'>
							<SideNavItem waves icon="assignment">
								Signup
							</SideNavItem>
						</Link>
						<Link to="/login">
							<SideNavItem waves icon="arrow_left_alt">
								Sign In
							</SideNavItem>
						</Link>
					</React.Fragment>
				) : (
					<Link to="/logout">
						<SideNavItem waves icon="arrow_right">
							Logout
						</SideNavItem>
					</Link>
					
				)}
			</SideNav>
		</Col>
		<Col className="logo">Authors' Haven</Col>
	</Col>
);

HeaderComponent.propTypes = {};

export default HeaderComponent;
