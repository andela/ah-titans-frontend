import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ViewArticle from '../components';
import fetchArticle from '../../actions/article';
import Loader from '../../Loader/components/index';
import EditButton from '../components/EditButton';

class ArticleView extends Component {
	constructor(props){
		super(props);
		this.state =  {
			isFetching: '',
			article: {}
		}
	}
	componentDidMount() {
		this.props.fetchArticle(this.props.match.params.slug);
	}

	componentWillReceiveProps(nextProps) {
		const { article, isFetching} = nextProps;
		console.log(nextProps)
		this.setState({article, isFetching});
	}

	render() {
		const {isFetching, article} = this.state;
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
}, dispatch);
export default connect(
	mapStatetoProps,
	mapDispatchToProps,
)(ArticleView);
