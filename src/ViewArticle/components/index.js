import React from 'react';
import { Col } from 'react-materialize';
import moment from 'moment';

class ViewArticle extends React.Component {
	render() {
		const {article} = this.props;

		return (
			<Col s={12} m={12}>
				<div className="container">
					<div>
						<h2>{article.title}</h2>
					</div>
                    <div>
                        <h6><i><b>By: {article.author && article.author.username}</b></i></h6>
                    </div>
                    <div>
                        <h6><i><b>{moment(article.updated_at).format('MMM Do YYYY, h:mm:ss a')}</b></i></h6>
                    </div>
					<div>
						<h4>{article.description}</h4>
					</div>
					<div>
						<p>{article.body}</p>
					</div>
				</div>
			</Col>
		);
	}
}

ViewArticle.propTypes = {};

export default ViewArticle;
