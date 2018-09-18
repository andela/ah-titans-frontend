import React, { Component } from 'react';
import ViewArticle from '../components';
import EditButton from '../components/EditButton';

class ArticleView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Title',
			description: 'The Description',
			body: 'Blahblahblah Blahblahblah Blahblahblah Blahblahblah Blahblahblah Blahblahblah',
		};
	}

	handleEdit() {
		console.log('Editing...');
		this.setState({
			description: 'Article editted',
		});
	}

	render() {
		const { title, description, body } = this.state;
		return (
			<div>
				<ViewArticle
					title={title}
					description={description}
					body={body}
				/>
				<EditButton
					handleEdit={this.handleEdit}
				/>
			</div>
		);
	}
}

export default ArticleView;
