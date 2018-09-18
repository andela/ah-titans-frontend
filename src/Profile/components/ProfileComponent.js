import React from 'react';
import PropTypes from 'prop-types';
import {
	CardPanel, Col, Row, Button, Modal, Input, Icon,
} from 'react-materialize';
import { Image } from 'cloudinary-react';
import ProfPic from '../../assets/profpic.jpg';


const ProfilePage = ({
	username, bio, interests, handleChange, handleClick, publicId,
	initialUsername, initialBio, initialInterests, handleUpload,
}) => {
	return (
		<Col m={8} s={12} offset="m2">
			<CardPanel className="blue-grey lighten-5 black-text">
				<Row>
					<Col md={6}>
						<h4 style={{ color: '#1aa3ff' }}>User Profile</h4>
					</Col>
					<Col md={6}>
						<Modal
							header="Edit profile"
							trigger={(
								<Button
									floating
									className="blue"
									waves="light"
									icon="mode_edit"
									style={{ marginTop: '13px', left: '500px' }}
								/>
							)}
							actions={(
								<div>
									<Button
										modal="close"
										waves="light"
										className="blue darken-2"
										id="update"
										style={{ marginRight: '20px' }}
										onClick={handleClick}
									>
										<Icon left>update</Icon>Update
									</Button>
								</div>
							)}
						>
							<Input
								type="text"
								name="username"
								label="username"
								value={username}
								s={12}
								onChange={handleChange}
							/>
							<Input
								type="text"
								name="bio"
								label="bio"
								s={12}
								value={bio}
								onChange={handleChange}
							/>
							<Input
								type="text"
								name="interests"
								label="interests"
								value={interests}
								s={12}
								onChange={handleChange}
							/>
						</Modal>
					</Col>
				</Row>
				<Row>
					<Col m={3} s={6}>
						{ (publicId)
							? <Image cloudName="authors-haven" publicId={`${publicId}`} width="120" height="150" crop="scale" />
							: <img src={ProfPic} alt="profpic" width="120" height="120" />
						}
						<Button waves="light" onClick={handleUpload}>Change</Button>
					</Col>
					<Col m={4}>
						<h5>{initialUsername}</h5>
					</Col>
				</Row>
				<Row>
					<h5>Bio:</h5>
					<p>
						{initialBio}
					</p>
				</Row>
				<Row>
					<h5>Interests:</h5>
					<p>
						{initialInterests}
					</p>
				</Row>
			</CardPanel>
		</Col>
	);
};

ProfilePage.propTypes = {
	username: PropTypes.string,
	bio: PropTypes.string,
	interests: PropTypes.string,
	initialUsername: PropTypes.string,
	initialBio: PropTypes.string,
	initialInterests: PropTypes.string,
	handleChange: PropTypes.func,
	handleClick: PropTypes.func,
	handleUpload: PropTypes.func,
	publicId: PropTypes.string,
}

export default ProfilePage;
