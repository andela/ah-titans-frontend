import React from 'react';
import { Link } from 'react-router-dom';
import {
	Navbar, Col,
} from 'react-materialize';
import Logo from '../../assets/logo.png';
// The Header creates links that can be used to navigate
// between routes.
const username = localStorage.getItem('username');

const Header = () => (
	<Navbar style={{ backgroundColor: '#3498db' }}>
		<Col s={10} offset="s2">
			<Col s={7}><img height="70" width="80" src={Logo} alt="Loading ..." /></Col>
			<Col s={5}>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to={`/profile/${username}`}>Profile</Link></li>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/signup">Signup</Link></li>
				</ul>
			</Col>
		</Col>
	</Navbar>
);


export default Header;
