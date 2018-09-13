import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import store from '../store';
import Home from './containers/index';
import ArticlesPage from './containers/index';
import ArticlesForm from './components/index';
import SearchComponent from './components/search';

describe('Home', () => {
	const article = {
		article: {
			slug:
				'',
			tagList: [
				'any',
			],
			body:
				'this is a test body',
			created_at:
				'',
		},
	};
	it('renders without crashing', () => {
		shallow(
			<ArticlesPage
				store={
					store
				}
				article={
					article
				}
			/>,
		);
	});
});

describe('Home', () => {
	const article = {
		article: {
			slug:
				'',
			tagList: [
				'any',
			],
			body:
				'this is a test body',
			created_at:
				'',
		},
	};
	it('renders without crashing', () => {
		shallow(
			<Home
				store={
					store
				}
				article={
					article
				}
			/>,
		);
	});
});

describe('<SearchComponent />', () => {
	describe('render()', () => {
		test('renders the component', () => {
			const wrapper = shallow(
				<SearchComponent />,
			);
			const component = wrapper.dive();

			expect(
				toJson(
					component,
				),
			).toMatchSnapshot();
		});
	});
});

describe('Articles form', () => {
	const article = {
		article: {
			slug:
				'',
			tagList: [],
			body:
				'this is a test body',
			created_at:
				'',
		},
	};
	const articlesFormWrapper = shallow(
		<ArticlesForm
			article={
				article
			}
		/>,
	);

	it('renders errors ', () => {
		expect(
			articlesFormWrapper.find(
				'.error',
			)
				.length,
		).toEqual(
			0,
		);
	});
	it('renders articles ', () => {
		expect(
			articlesFormWrapper.find(
				'.article',
			)
				.length,
		).toEqual(
			1,
		);
	});
	it('returns 2 tags', () => {
		expect(
			articlesFormWrapper.find(
				'.chip',
			)
				.length,
		).toEqual(
			0,
		);
	});
});
