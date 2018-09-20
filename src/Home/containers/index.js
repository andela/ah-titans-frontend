import React, { Component, Fragment } from 'react';
import SnackBar from 'react-material-snackbar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'react-materialize';
import '../components/index.scss';
import ArticlesForm from '../components';
import SearchComponent from '../components/search';
import Loader from '../../Loader/components/index';
import getArticles from '../../actions/viewArticles';
import CreateArticleButton from '../components/btnCreateArticle';
import getActiveUser from '../../actions/getActiveUser';
import BottomPagination from '../components/bottomPagination';

export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFetching: '',
			success: '',
			articles: {},
			activePage: 1,
			page: 1,
		};
	}

	componentDidMount() {
		this.props.getArticles(this.state.page);
		this.props.getActiveUser();
	}


	componentWillReceiveProps(nextProps) {
		const { articles } = nextProps;
		const { isFetching, success } = articles;
		const all_articles = articles.items.results;
		this.setState({ isFetching, success, articles: all_articles });
	}

	handlePageChange(pageNumber) {
		this.setState({ activePage: pageNumber });
		this.props.getArticles(pageNumber);
	}

	render() {
		const { new_user } = this.props.home;
		const { isFetching, success } = this.props.articles;
		const articles = this.props.articles.items;
		const article = [];
		const token = localStorage.getItem('token');

		if (success === true) {
			articles.results.map(article_ => article.push(<ArticlesForm article={article_} key={article.slug} />));
		}

		return (
			<Fragment>
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
				</div>
				<Col s={4} offset="s4" style={{ textAlign: 'center' }}>
					<BottomPagination activePage={this.state.activePage} onChange={this.handlePageChange.bind(this)} totalItemsCount={articles.count} />
				</Col>
			</Fragment>
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

export default connect(
	mapStatetoProps,
	mapDispatchToProps,
)(Home);
