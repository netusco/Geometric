import React from 'react';
import ShapeButton from './Buttons';
import Shape from './Shape';

/**
* Create a page with geometric shapes challenge
* state: shape
**/
var GeometricPage = React.createClass({
	getInitialState: function() {
		return { shape: 'Current Shapes' }
	},
	selectedShape: function(checked, shapeName) {
		if(checked) {	
			this.setState({ shape: shapeName });
		}
	},
	render: function() {
		return (
			<div>
				<div className="App-header">
				  <h2>Geometric shapes</h2>
				  <p>{this.state.shape}</p>
				</div>
				<div className="content">
					<div className="toolBar">
						<ShapeButton name="Square" callbackParent={this.selectedShape} />
						<ShapeButton name="Diamond" callbackParent={this.selectedShape} />
					</div>
					<Shape name={this.state.shape} />
				</div>
			</div>
		);
	}
});

export default GeometricPage;
