import React from 'react';
import { Col, Row } from 'react-materialize';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './index.css';

class ViewArticle extends React.Component {
	render() {
		const {article} = this.props;
		console.log(article.author);

		return (
			<Row s={12}>
				<Col s={12}>
				<div className="container">
					<Row s={12}>
						<Col s={6}>
						<div className="Head">
							<h3 style={{ color: '#2196F3', marginRight: '20px'}}>{article.title}</h3>
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
						<div className="floating" style={{marginLeft:'10px'}} >
					<i class="small material-icons floating left">thumb_up</i><br></br>
					<i class="small material-icons floating left">thumb_down</i><br></br>
					<i class="small material-icons floating left">bookmark</i><br></br>
					<i class="small material-icons floating left">share</i><br></br>
				</div>
				</div>
			</Col>
			</Row>
		);
	}
}

ViewArticle.propTypes = {};

export default ViewArticle;
