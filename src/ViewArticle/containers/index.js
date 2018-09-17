import React, { Component } from 'react';
import ViewArticle from '../components';

class ArticleView extends Component {
	componentDidMount() {
		this.props.getArticles();
	}
	render() {
		const article = this.props.article

		return (

			<ViewArticle article={article} />

		);
	}
}

export default ArticleView;
