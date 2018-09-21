import React, { Fragment } from 'react';
import { Card, Row } from 'react-materialize';
import Img from '../../assets/404.jpeg';

const NotFound = () => {
	return (
		<Fragment>
			<Row>
				<Card
					m={6}
					className="center not-found"
					actions={[<a href="/">Take me home!</a>]}
				>
					<img src={Img} />
				</Card>
			</Row>
		</Fragment>
	);
};

export default NotFound;
