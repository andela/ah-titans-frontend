import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewArticle from '../components';
import fetchArticle from '../../actions/article';


class ArticleView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Title',
			description: 'The Description',
			body: 'Blahblahblah Blahblahblah Blahblahblah Blahblahblah Blahblahblah Blahblahblah',
		};
	}

	render() {
		const { title, description, body } = this.state;
		console.log(this.props)
		return (
			<ViewArticle
				title={title}
				description={description}
				body={body}
			/>
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
