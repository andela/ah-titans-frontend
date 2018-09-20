import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfilePage from '../components/ProfileComponent';
import { getProfile, updateProfile } from '../../actions/profileActions';
import Loader from '../../Loader/components';
import Toast from '../../Toast';

class Profile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			bio: '',
			interests: '',
			image: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
	}

	componentDidMount() {
		const { match, getProfile: get } = this.props;
		const urlUsername = match.params.username;
		get(urlUsername);
	}

	componentWillReceiveProps(nextProps) {
		const {
			bio, interests, username, image,
		} = nextProps.profile.user;
		this.setState({
			username, bio, interests, image,
		});
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleUpload() {
		cloudinary.openUploadWidget({ upload_preset: 'iwbpjk8d', tags: ['profpic'] },
			(error, result) => {
				const { updateProfile: updateImage } = this.props;
				this.setState({ image: result[0].public_id });
				updateImage({ user: this.state });
			});
	}

	handleClick(e) {
		e.preventDefault();

		const {
			username, bio, interests, image,
		} = this.state;
		const user = {
			user: {
				username,
				bio,
				interests,
				image,
			},
		};
		const { updateProfile: updateDetails, history } = this.props;
		const { username: newName } = this.state;
		const { profile } = this.props;
		const { username: oldName } = profile.user;
		updateDetails(user);
		const path = (newName !== '') ? newName : oldName;
		localStorage.setItem('username', path);
		history.push(`/profile/${path}`);
	}

	render() {
		const { profile } = this.props;
		const {
			user, errors, isFetching,
		} = profile;
		const initialUsername = user.username;
		const initialBio = user.bio;
		const initialInterests = user.interests;
		const image = user.image;
		const {
			username, bio, interests,
		} = this.state;

		return (
			<div>
				{profile.success && <Toast message="Profile updated successfully." type="success" />}
				{isFetching && <Loader />}
				<ProfilePage
					initialUsername={initialUsername}
					initialBio={initialBio}
					initialInterests={initialInterests}
					username={username}
					bio={bio}
					errors={errors}
					interests={interests}
					handleChange={this.handleChange}
					handleClick={this.handleClick}
					handleUpload={this.handleUpload}
					publicId={image}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	profile: state.profile,
});

Profile.propTypes = {
	getProfile: PropTypes.func,
	updateProfile: PropTypes.func,
};


export default connect(mapStateToProps, { getProfile, updateProfile })(Profile);
