import React from 'react';
import { Col, Row } from 'react-materialize';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './index.css';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';


class ViewArticle extends React.Component {
	render() {
		const { article, rating } = this.props;

		return (
			<Row s={12}>
				<Col s={12}>
					<div className="container">
						<Row s={12}>
							<Col s={6}>
								<div className="Head">
									<h5 style={{ color: '#2196F3', marginRight: '20px' }}>{article.title}</h5>
									<Rater total={5} rating={this.props.rating} onRate={this.props.onRate} onRating={{}} id="rate" />
									{rating}
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
					</Row>
					<Col>
						<i className="material-icons icon-blue right">
							{article.favorited ? 'favorite_border' : 'favorite'}
						</i>
					</Col>
          <Col s={12}>
				   	 <div>
                <h6><i><b><Link to={`/profile/${article.author && article.author.username}`}>
									By: {article.author && article.author.username}</Link></b></i></h6>
            	</div>
				    </Col>
            <Col s={12}>
						<div>
              <h6 style={{ color: '#2196F3' }}><i><b>{moment(article.updated_at).format('MMM Do YYYY, h:mm:ss a')}</b></i></h6>
            </div>
						</Col>
						<Col s={12}>
							<div>
								<p>{article.body}</p>
							</div>
						</Col>
						<div className="floating" style={{ marginLeft: '10px' }}>
							<i className="small material-icons floating left">thumb_up</i>
							<br />
							<i className="small material-icons floating left">thumb_down</i>
							<br />
							<i className="small material-icons floating left">bookmark</i>
							<br />
							<i className="small material-icons floating left">share</i>
							<br />
						</div>
					</div>
				</Col>
			</Row>
		);
	}
}

ViewArticle.propTypes = {};

export default ViewArticle;
