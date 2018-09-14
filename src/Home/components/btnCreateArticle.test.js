import React from 'react';
import { shallow } from 'enzyme';
import CreateArticleButton from './btnCreateArticle';

describe('CreateArticleButton', () => {
	it('renders without crashing', () => {shallow(<CreateArticleButton />);
	});
});
