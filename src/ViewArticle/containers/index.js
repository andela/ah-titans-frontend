import React, { Component } from 'react';
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
			rateData: 0,
		};
		this.onRate = this.onRate.bind(this);
	}


	componentDidMount() {
		this.props.fetchArticle(this.props.match.params.slug);

	}

	onRate({ rating }) {
		this.setState({ rateData: rating, rating: this.props.article.average_rating });
		const rateData = {
			rate: {
				rating: this.state.rateData,
			},
		};
		this.props.sucessfullRating(this.props.match.params.slug, rateData);
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

export default connect(
	mapStatetoProps,
	{ sucessfullRating, fetchArticle },
)(ArticleView);
