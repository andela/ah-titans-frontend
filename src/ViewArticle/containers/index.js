import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ViewArticle from '../components';
import fetchArticle from '../../actions/article';
import { likeArticle, dislikeArticle } from '../../actions/likeDislike';
import Loader from '../../Loader/components/index';
import EditButton from '../components/EditButton';

class ArticleView extends Component {
	componentDidMount() {
		this.props.fetchArticle(this.props.match.params.slug);
	}

	handleLikeDislike(){
		e.preventDefault()
		if(e.target.id == 'like'){

		}
	}

	render() {
		const { article, isFetching } = this.props;
		console.log(this.props)
		return (
			<div>
				<React.Fragment>{isFetching ? <Loader /> : <ViewArticle article={article} />}</React.Fragment>
				<EditButton />
			</div>
		);
	}
}

const mapStatetoProps = ({ getArticle }) => ({
	article: getArticle.items,
	isFetching: getArticle.isFetching,
	success: getArticle.success,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchArticle,
	dislikeArticle,
	likeArticle,
}, dispatch);
export default connect(
	mapStatetoProps,
	mapDispatchToProps,
)(ArticleView);
