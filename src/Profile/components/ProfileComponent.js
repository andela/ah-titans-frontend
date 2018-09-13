import React from 'react';
import {
	CardPanel, Col, Row, Button, Modal, Input, Icon,
} from 'react-materialize';
import ProfPic from '../../assets/profpic.jpg';

const ProfilePage = ({username, bio, interests, handleChange, handleClick }) => {
	return (
		<Col m={8} s={12} offset="m2" >
			<CardPanel className="blue lighten-5 black-text">
				<Row>
					<Col md={6}>
						<h4 style={{ color: '#1aa3ff' }}>User Profile</h4>
					</Col>
					<Col md={6}>
						<Modal
							header='Edit profile'
							trigger={
								<Button 
									floating 
									className='blue' 
									waves='light' 
									icon='mode_edit' 
									style={{ marginTop: '13px', left: '500px'}}
								/>
							}
							actions={
								<div>
									<Button 
										modal="close" 
										waves="light" 
										className="blue darken-2"
										style={{ marginRight: '20px'}}
										onClick = {handleClick}
									>
										<Icon left>
											update
										</Icon>Update
									</Button>
								</div>
							}>
							<Input 
								type="text"
								name="username"
								value={username}
								s={12}
								onChange={(value) => handleChange(value)}
							/>
							<Input 
								type="text"
								name="bio"
								s={12}
								value={bio}
								onChange={handleChange}
							/>
							<Input 
								type="text"
								name="interests"
								value={interests}
								s={12}
								onChange={handleChange}
							/>
						</Modal>
					</Col>
				</Row>
				<Row>
					<Col m={4} s={6}>
						<img src={ProfPic} alt="Profile picture" />
					</Col>
					<Col m={4}>
						<h5>{username}</h5>
					</Col>
				</Row>
				<Row>
					<h5>Bio:</h5>
					<p>
						{bio}
					</p>
				</Row>
				<Row>
					<h5>Interests:</h5>
					<p>
						{interests}
					</p>
				</Row>
			</CardPanel>
		</Col>
	);
}

export default ProfilePage;
