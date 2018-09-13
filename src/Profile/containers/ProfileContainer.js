import React from 'react';
import { connect } from 'react-redux';
import ProfilePage from '../components/ProfileComponent';
import { getProfile, updateProfile } from '../../actions/profileActions';


class Profile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			bio: '',
			interests: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.props.getProfile();
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleClick(e) {
		e.preventDefault();

		const user = {
			user: {
				username: this.state.username,
				bio: this.state.bio,
				interests: this.state.interests,
			},
		};

		this.props.updateProfile(user);
	}

	render() {
		const { username, bio, interests } = this.props.profile.user;	
		console.log(this.props.profile.user);
		
		return (
			<ProfilePage
				username={username}
				bio={bio}
				interests={interests}
				handleChange={this.handleChange}
				handleClick={this.handleClick}
			/>
		);
	}
}

const mapStateToProps = state => ({
	profile: state.profile,
});


export default connect(mapStateToProps, { getProfile, updateProfile })(Profile);
