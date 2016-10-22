import React from 'react';
import './Buttons.css';

var ShapeButton = React.createClass({
	getInitialState: function() {
		return { checked: false };
	},
	onClick: function() {
		var newState = !this.state.checked;
		this.setState = { checked: newState };
		this.props.callbackParent(newState, this.props.name);
	},
	render: function() {
		return <button className="btn-class" onClick={this.onClick} checked={this.state.checked}> {this.props.name} </button>
	}
});

export default ShapeButton;
