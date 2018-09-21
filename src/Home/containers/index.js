import React, { Component } from 'react';
import SnackBar from 'react-material-snackbar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row } from 'react-materialize';
import { withRouter } from 'react-router-dom';
import '../components/index.scss';
import ArticlesForm from '../components';
import SearchComponent from '../components/search';
import Loader from '../../Loader/components/index';
import getArticles from '../../actions/viewArticles';
import CreateArticleButton from '../components/btnCreateArticle';
import getActiveUser from '../../actions/getActiveUser';

export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFetching: '',
			success: '',
			articles: {},
		};
	}

	componentDidMount() {
		this.props.getArticles();
		this.props.getActiveUser();
	}

	componentWillReceiveProps(nextProps) {
		const { articles } = nextProps;
		const { isFetching, success } = articles;
		const all_articles = articles.items.results;
		this.setState({ isFetching, success, articles: all_articles });
	}

	render() {
		const { new_user } = this.props.home;
		const { isFetching, success } = this.props.articles;
		const articles = this.props.articles.items.results;
		const article = [];
		const token = localStorage.getItem('token');

		if (success === true) {
			articles.map(article_ => article.push(<ArticlesForm article={article_} key={article.slug} />));
		}

		return (
			<div className="app">
				{new_user ? (
					<SnackBar show timer={6000} className="home">
            You have successfully signed up to Authors Haven!! Please check your
            email to verify your account

										     </SnackBar>
				) : (
					''
				)}
				{isFetching && <Loader />}
				<SearchComponent />
				<Row class="home">
					{' '}
					{article}
				</Row>
				{
					token ? (<CreateArticleButton />) : ('')
				}
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({
	getActiveUser, getArticles,
}, dispatch);

const mapStatetoProps = state => ({
	home: state.exampleReducer,
	articles: state.viewArticles,
});

export default withRouter(connect(
	mapStatetoProps,
	mapDispatchToProps,
)(Home));
