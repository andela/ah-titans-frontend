import React from 'react';
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
				<SideNavItem href="/" icon="home">
          Home
				</SideNavItem>
				{user.user.username && (
					<React.Fragment>
						<SideNavItem href="/article" icon="edit">
              Create Article
						</SideNavItem>
						<SideNavItem href={`/profile/${user.user.username}`}
							icon="perm_identity">
              View My Profile
            </SideNavItem>
					</React.Fragment>
				)}
				<SideNavItem divider />
				{!user.user.username ? (
					<React.Fragment>
						<SideNavItem waves href="/signup" icon="assignment">
              Signup
						</SideNavItem>
						<SideNavItem waves href="/login" icon="arrow_left_alt">
              Sign In
            </SideNavItem>
					</React.Fragment>
				) : (
					<SideNavItem waves href="/logout" icon="arrow_right">
            Logout
					</SideNavItem>
				)}
			</SideNav>
		</Col>
		<Col className="logo">Authors' Haven</Col>
	</Col>
);

HeaderComponent.propTypes = {};

export default HeaderComponent;
