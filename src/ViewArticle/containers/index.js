import React, { Component } from 'react';
import swal from 'sweetalert';
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
		this.state = {
			article: {},
			isFetching: '',
			likes_count: 0,
			dislikes_count: 0,
		};
		this.handleLikeDislike = this.handleLikeDislike.bind(this);
	}

	componentDidMount() {
		this.props.fetchArticle(this.props.match.params.slug);
	}

	componentWillReceiveProps(nextProps) {
		const { article, isFetching } = nextProps;
		const { likes_count, dislikes_count } = article;
		this.setState({ isFetching, article, likes_count, dislikes_count });
	}

	handleLikeDislike(e) {
		e.preventDefault();
		const { like, dislike } = this.props;
		const { match } = this.props;
		if (localStorage.getItem('token')) {
			if (e.target.id === 'like') {
				like(match.params.slug);
			} else if (e.target.id === 'dislike') {
				dislike(match.params.slug);
			}
	  } else {
			swal('Please log in to like or dislike this article');
		}
	}

	render() {
		const { article, isFetching, likes_count, dislikes_count } = this.state;
		return (
			<div>
				<React.Fragment>{isFetching ? <Loader /> : <ViewArticle article={article} onClick={this.handleLikeDislike} likes={likes_count}
				dislikes={dislikes_count} />}</React.Fragment>
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
