import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewArticle from '../components';
import fetchArticle from '../../actions/article';


class ArticleView extends Component {
	componentDidMount() {
		this.props.fetchArticle(this.props.match.params.slug);
	}
	render() {
		const { title, description, body } = this.props.article;
		console.log(this.props.article)

		return (
			<ViewArticle title={title} description={description} body={body} author={author} created_at={created_at}/>
		);
	}
}

const mapStatetoProps = state => ({
	home:
		state.exampleReducer,
	article:
		state.getArticle.items,
});
export default connect(
	mapStatetoProps,
	{
		fetchArticle,
	},
)(ArticleView);
