import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewArticle from '../components';
import fetchArticle from '../../actions/article';
import Loader from '../../Loader/components/index';


class ArticleView extends Component {
	componentDidMount() {
		this.props.fetchArticle(this.props.match.params.slug);
	}
	render() {
		const {article, isFetching}  = this.props
		return (
			<React.Fragment>{isFetching ? <Loader /> : <ViewArticle article={article} />}</React.Fragment>
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
