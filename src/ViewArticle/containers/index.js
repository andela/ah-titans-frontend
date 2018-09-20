import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ViewArticle from '../components';
import fetchArticle from '../../actions/article';
import Loader from '../../Loader/components/index';
import EditButton from '../components/EditButton';
import { sucessfullRating } from '../../actions/ratingAction';
import ratingArticles from '../../reducers/ratingReducers';

class ArticleView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rating: 0,
		};
		this.onRate = this.onRate.bind(this);
	}


	componentDidMount() {
		this.props.fetchArticle(this.props.match.params.slug);
		console.log(this.props);

		// this.props.sucessfullRating(this.props.match.params.slug, 5);
	}

	onRate(e, value) {
		this.setState({ rateData: value, rating: this.props.article.average_rating });
		const rateData = {
			rate: {
				rate: value,
			},
		};
		this.props.sucessfullRating(this.props.match.params.slug, rateData);
		console.log('here');
	}


	render() {
		const { article, isFetching } = this.props;
		console.log(this.props);
		return (
			<div>
				<React.Fragment>{isFetching ? <Loader /> : <ViewArticle article={article} rating={this.state.rating} onRate={this.onRate} />}</React.Fragment>
				<EditButton />
			</div>
		);
	}
}

const mapStatetoProps = ({ getArticle }) => ({
	article: getArticle.items,
	isFetching: getArticle.isFetching,
	success: getArticle.success,
	rating: ratingArticles,
});

// const mapDispatchToProps = dispatch => bindActionCreators({
// 	fetchArticle,
// 	sucessfullRating,
// }, dispatch);
export default connect(
	mapStatetoProps,
	// mapDispatchToProps,,
	{ sucessfullRating, fetchArticle },
)(ArticleView);
