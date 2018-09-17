import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewArticle from '../components';
import fetchArticle from '../../actions/article';


class ArticleView extends Component {
	componentDidMount() {
		this.props.fetchArticle(this.props.match.params.slug);
	}
	render() {
		const {article, isFetching, success}  = this.props

		return (
			<ViewArticle article={article} />
		);
	}
}

const mapStatetoProps = ({ getArticle}) => ({
	article: getArticle.items,
	isFetching: getArticle.isFetching,
	success: getArticle.success,
});
export default connect(
	mapStatetoProps,
	{
		fetchArticle,
	},
)(ArticleView);
