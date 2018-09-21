import React from 'react';
import { Row } from 'react-materialize';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header/containers';
import Main from '../Main/components';

const App = () => (
	<BrowserRouter>
		<Row>
			<Header />
			<Main />
		</Row>
	</BrowserRouter>
);

export default App;
