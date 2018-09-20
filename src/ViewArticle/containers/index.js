import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ViewArticle from '../components/index';
import fetchArticle from '../../actions/article';
import { likeArticle, dislikeArticle } from '../../actions/likeDislike';
import Loader from '../../Loader/components/index';
import EditButton from '../components/EditButton';

class ArticleView extends Component {
	constructor(props) {
		super(props);
		this.handleLikeDislike = this.handleLikeDislike.bind(this);
	}

	componentDidMount() {
		this.props.fetchArticle(this.props.match.params.slug);
	}

	handleLikeDislike(e) {
		e.preventDefault();
		const { like, dislike } = this.props;
		const { match } = this.props;
		if (e.target.id == 'like') {
			like(match.params.slug);
		} else if (e.target.id == 'dislike') {
			dislike(match.params.slug);
		} else {
			return 'Please log in to like or dislike this article';
		}
	}

	render() {
		const { article, isFetching } = this.props;
		return (
			<div>
				<React.Fragment>{isFetching ? <Loader /> : <ViewArticle article={article} onClick={this.handleLikeDislike} />}</React.Fragment>
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
	dislike: dislikeArticle,
	like: likeArticle,
}, dispatch);

export default connect(
	mapStatetoProps,
	mapDispatchToProps,
)(ArticleView);
