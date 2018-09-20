import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {
	Card, Col, Chip, Icon,
} from 'react-materialize';
import './index.scss';

const ArticlesForm = ({ article }) => (
	<Col s={12} m={6}>
		<Card
			key={article.slug}
			className="grey lighten-4 article"
			textClassName="black-text"
			title={article.title}
			actions={[
				<button className="btn waves-effect waves-light blue-grey">
					<i className="material-icons">share</i>
				</button>,
				<button className="btn waves-effect waves-light blue-grey">
					<i className="material-icons">thumb_up</i>
					<span>{article.likes_count}</span>
				</button>,
				<button className="btn waves-effect waves-light blue-grey">
					<i className="material-icons">thumb_down</i>
					<span>{article.dislikes_count}</span>
				</button>,
				<Link to={`/article/${article.slug}`}>
					<a className="right blue-grey-text" href="article link goes here">Read more...</a>
				</Link>,
			]}
		>
			{article.tagList && article.tagList.map(tag => <Chip>{tag}</Chip>)}

			<p className="ratings">
				<Icon blue>star</Icon>
				<i className="material-icons">star</i>
				<i className="material-icons icon-orange">star</i>
				<i className="material-icons icon-orange">star</i>
				<i className="material-icons icon-orange">star_half</i>
				<i style={{ alignContent: 'center', position: 'inline' }}>(4.6)</i>
				<i className="material-icons icon-blue right">
					{article.favorited ? 'favorite' : 'favorite_border'}
				</i>
			</p>

			<p />
			<Link to={`/article/${article.slug}`}>
				<p className="about">{article.description}</p>
				<br />
				<p style={{ color: 'black' }}>
					{article.body && article.body.substring(0, 150)}
					{article.body && article.body.length > 150 ? '...' : ''}
				</p>
			</Link>
			<hr className="light-grey" />
			<p className="writtenby">
          By:

								{' '}
				{article.author && article.author.username}
				<a href="url" className="follow">Follow</a>
				{moment(article.created_at).format('MMM Do YYYY, h:mm:ss a')}
			</p>
		</Card>
	</Col>
);

ArticlesForm.propTypes = {};

export default ArticlesForm;
