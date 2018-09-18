import React from 'react';
import { Col, Icon } from 'react-materialize';

class ViewArticle extends React.Component {
	render() {
		const {
			title, description, body,
		} = this.props;

		return (
			<Col s={12} m={12}>
				<div className="container">
					<div>
						<h2>{title}</h2>
					</div>
					<div>
						<h4>{description}</h4>
					</div>
					<div>
						<p>{body}</p>
					</div>
				</div>
			</Col>
		);
	}
}

ViewArticle.propTypes = {};

export default ViewArticle;
