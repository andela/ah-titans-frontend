import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewArticle from '../components';
import fetchArticle from '../../actions/article';

class ArticleView extends Component {
	componentDidMount() {
		this.props.fetchArticle();
	}

	render() {
		const article = this.props.article;

		return (
			<ViewArticle article={article}/>
		);
	}
}

const mapStatetoProps = state => ({
	home:
		state.exampleReducer,
	article:
		state.viewArticles,
});
export default connect(
	mapStatetoProps,
	{
		fetchArticle,
	},
)(ArticleView);
