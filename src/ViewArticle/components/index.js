import React from 'react';
import { Col, Row } from 'react-materialize';
import moment from 'moment';
import './index.css';
import Icons from '../../Icons/components/index';

class ViewArticle extends React.Component {
	render() {
		const { article, onClick, error } = this.props;

		return (
			<Row s={12}>
				<Col s={12}>
					<div className="container">
						<Row s={12}>
							<Col>
								<div className="Head">
									<h3 style={{ color: '#2196F3', marginRight: '20px' }}>{article.title}</h3>
									<i className="material-icons icon-orange small">star</i>
									<i className="material-icons icon-orange small star">star</i>
									<i className="material-icons icon-orange small">star</i>
									<i className="material-icons icon-orange small">star</i>
									<i className="material-icons icon-orange small">star_half</i>
									<i style={{ alignContent: 'center', position: 'inline' }}>4.6</i>
								</div>
							</Col>
						</Row>
						<Col>
							<i className="material-icons icon-blue right">
								{article.favorited ? 'favorite_border' : 'favorite'}
							</i>
						</Col>
						<Col s={12}>
							<div>
								<h6>
									<i>
										<b>
											By:
											{' '}
											{article.author && article.author.username}
										</b>

									</i>
								</h6>
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
						<Col className="icona">
							<div className="floating" style={{ display: 'inline-flex' }}>
								<div className="clear">
									<Icons icon="thumb_up" onClick={onClick} id="like" count={article.likes_count} />
								</div>
								<div className="clear">
									<Icons icon="thumb_down" onClick={onClick} id="dislike" count={article.dislikes_count} />
								</div>
								<div className="clear">
									<Icons icon="bookmark" onclick={{}} />
								</div>
								<div className="clear">
									<Icons icon="share" onclick={{}} />
								</div>
							</div>
						</Col>
						{error}
					</div>
				</Col>
			</Row>
		);
	}
}

ViewArticle.propTypes = {};

export default ViewArticle;
