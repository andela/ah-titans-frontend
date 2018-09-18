import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewArticle from '../components';
import fetchArticle from '../../actions/article';
import Loader from '../../Loader/components/index';
import EditButton from '../components/EditButton';
import { bindActionCreators } from 'redux';


class ArticleView extends Component {
	componentDidMount() {
		this.props.fetchArticle(this.props.match.params.slug);
	}

	render() {
		const { article, isFetching } = this.props;
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
}, dispatch)
export default connect(
	mapStatetoProps,
	mapDispatchToProps,
)(ArticleView);
