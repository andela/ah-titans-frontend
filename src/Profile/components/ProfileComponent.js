import React from 'react';
import PropTypes from 'prop-types';
import {
	Card, Col, Row, Button, Modal, Input, Icon,
} from 'react-materialize';
import { Image } from 'cloudinary-react';
import ProfPic from '../../assets/profpic.jpg';
import NotFound from '../../Error_pages/components/page_not_found';
import Toast from '../../Toast';
import './index.scss';

const currentUser = localStorage.getItem('username');

const ProfilePage = ({
	username, bio, interests, handleChange, handleClick, publicId,
	initialUsername, initialBio, initialInterests, handleUpload, errors,
}) => {
	return (
		<React.Fragment>
			{errors.username && <Toast message={errors.username[0]} type="error" />}
			{ typeof errors === 'string'
				? <NotFound />
				:	(<React.Fragment>
					<Col m={4} s={12} offset="m4">
						<Card className="grey lighten-5 black-text">			
							<Row style={{ textAlign: 'center' }}>
								{ (publicId)
									? <Image cloudName="authors-haven" publicId={`${publicId}`} width="150" height="150" style={{ borderRadius: '100px' }} />
									: <img src={ProfPic} alt="profpic" width="150" height="150" style={{ borderRadius: '50%' }} />
								}
								{ (initialUsername === currentUser)
									&& <Button className="grey lighten-5 blue-text z-depth-0 edit-profile" waves="light" onClick={handleUpload}><i className="material-icons">add_a_photo</i></Button>
								}
							</Row>
							<Row style={{ textAlign: 'center' }}>
								<Col m={8} offset="m2">
									<h5>{initialUsername}</h5>
									<hr style={{ height: '2px', backgroundColor: 'black' }} />
								</Col>
							</Row>
							<Row style={{ textAlign: 'center' }}>
								<h5>Bio:</h5>
								<p>
									{initialBio}
								</p>
							</Row>
							<Row style={{ textAlign: 'center' }}>
								<h5>Interests:</h5>
								<p>
									{initialInterests}
								</p>
							</Row>
							<Row>
								{ initialUsername === currentUser
									? (
										<Col m={12}>
											<Modal
												header="Edit profile"
												trigger={(
													<Button
														className="waves-effect black-text grey lighten-5 btn-edit-profile"
													>Edit Profile</Button>
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
									)
									: ''
								}
							</Row>

						</Card>
					</Col>		
       </React.Fragment>
				)
			}
		</React.Fragment>
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
};

export default ProfilePage;
