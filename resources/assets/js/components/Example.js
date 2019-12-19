import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2">
						<div className="panel panel-default">
							<div className="panel-heading">Example Component</div>
							<button className="btn btn-danger">Right on sister </button>
							<div className="panel-body">
								I'm an example component!
								and so what?
                            </div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

if (document.getElementById('example')) {
	ReactDOM.render(<Example />, document.getElementById('example'));
}
