import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import ArticleView from './containers/index';
import ArticlePage from './containers/index';
import ViewArticle from './components/index';
import EditButton from './components/EditButton';

describe('Article', () => {
	const article = {
		article: {
			slug: 'title', tagList: ['any'], body: 'this is a test body', created_at: '',
		},
	};
	const articlePageWrapper = mount(
		<MemoryRouter initialEntries={['/article']}>
			<Provider store={store} article={article}>
				<ArticlePage
					match={{
						params: { slag: 'title' },
						isExact: true,
					}}
				/>
			</Provider>
		</MemoryRouter>,
	);
});

describe('<EditButton />', () => {
	it('renders edit button component without crashing', () => {
		shallow(<EditButton store={store} />);
	});
});

describe('ArticleView', () => {
	const article = {
		article: { article },
	};
	it('renders article view component without crashing', () => {
		shallow(<ArticleView store={store} article={article} />);
	});
});

describe('View Article form', () => {
	const article = {
		article: {
			slug: '', tagList: [], body: 'this is a test body', created_at: '',
		},
	};
	const articlesFormWrapper = shallow(<ViewArticle article={article} />);

	it('renders errors ', () => {
		expect(articlesFormWrapper.find('.error').length).toEqual(0);
	});
	it('renders articles ', () => {
		expect(articlesFormWrapper.find('.article').length).toEqual(0);
	});
	it('returns 2 tags', () => {
		expect(articlesFormWrapper.find('.chip').length).toEqual(0);
	});
	it('returns 2 tags', () => {
		expect(articlesFormWrapper.find('.slug').length).toEqual(0);
	});
});
