import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ViewArticle from '../components/index';
import fetchArticle from '../../actions/article';
import { likeArticle, dislikeArticle } from '../../actions/likeDislike';
import Loader from '../../Loader/components/index';
import EditButton from '../components/EditButton';

class ArticleView extends Component {
	componentDidMount() {
		this.props.fetchArticle(this.props.match.params.slug);
		this.props.dislike(this.props.match.params.slug);
		this.props.like(this.props.match.params.slug);
	}

	handleLikeDislike(e){
		e.preventDefault();
		const {likes, dislikes, match} = this.props;
		if(e.target.id == 'like'){
			likes(match.params.slug);
		}
		else if(e.target.id == 'dislike'){
			dislikes(match.params.slug);
		}
		else{
				return 'Please log in to like or dislike this article'
		}
	}

	render() {
		const { article, isFetching } = this.props;
		console.log(this.props)
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
