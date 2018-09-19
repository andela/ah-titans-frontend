import React from 'react';
import './index.scss';

const Toast = ({ message, type }) => (
	<div className={`toaster toaster-${type}`} id="hideMe">
		<div>
			<i className="material-icons left">{ type === 'success' ? 'check' : 'error' }</i>
			<React.Fragment>
				{message}
			</React.Fragment>
		</div>
	</div>
);

export default Toast;
