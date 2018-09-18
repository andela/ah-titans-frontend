import React from 'react';
import { Col , Icon, Row } from 'react-materialize';
import moment from 'moment';

class ViewArticle extends React.Component {
	render() {
		const {article} = this.props;

		return (
			<Row s={12}>
				<Col s={12}>
				<div className="container">
					<Row s={12}>
						<Col s={6}>
						<div>
						<h3 style={{color : 'blue'}}>{article.title}</h3>
						</div>
					</Col>
					<Col s={6}>
						<div>
							<i className="material-icons icon-orange small">star</i>
							<i className="material-icons icon-orange small">star</i>
							<i className="material-icons icon-orange small">star</i>
							<i className="material-icons icon-orange small">star</i>
							<i className="material-icons icon-orange small">star_half</i>
							<span style={{ alignContent: 'center', position: 'inline', }}>4.6</span>
						</div>
					</Col>
					</Row>
					<Col>
							<i className="material-icons icon-blue right">
								{article.favorited ? 'favorite' : 'favorite_border'}
							</i>
					</Col>
                   <Col s={12}>
				   	 <div>
                        <h6><i><b>By: {article.author && article.author.username}</b></i></h6>
                    </div>
				   </Col>
                    <Col s={12}>
						<div>
                        <h6><i><b>{moment(article.updated_at).format('MMM Do YYYY, h:mm:ss a')}</b></i></h6>
                    	</div>
					</Col>
					<Col s={12}>
					<div>
						<p>{article.body}</p>
					</div>
					</Col>
				</div>
			</Col>
			</Row>
		);
	}
}

ViewArticle.propTypes = {};

export default ViewArticle;
