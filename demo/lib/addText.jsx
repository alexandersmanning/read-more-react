import React from 'react';

class AddText extends React.Component {
	constructor(props) {
		super(props);
		this.state = {text: "", min: 80, ideal: 100, max: 200, errors: ""};
		this.updateField = this.updateField.bind(this);
		this.setDefaults = this.setDefaults.bind(this);
		this.checkErrors = this.checkErrors.bind(this);
		this.addText = this.addText.bind(this);
	}

	updateField(fieldName) {
		return e => this.setState({
			[fieldName]: e.currentTarget.value
		});
	}

	setDefaults() {
		this.setState({text: "", min: 80, ideal: 100, max: 200, errors: ""});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.checkErrors();
	}

	checkErrors() {
		if (parseInt(this.state.max) < parseInt(this.state.ideal) ||
			parseInt(this.state.min) > parseInt(this.state.ideal)
			) {
			this.setState({errors: "Please make sure the min is less than the ideal, and the ideal is less than the max"})
		} else { this.addText() }
	}

	addText() {
		this.props.addToState({
			text: this.state.text,
			max: parseInt(this.state.max),
			min: parseInt(this.state.min),
			ideal: parseInt(this.state.ideal)
		});

		this.setDefaults();
	}

	render() {
		return (
		<form onSubmit={this.handleSubmit}
			className="add-text-form">
			<div>{this.state.errors}</div>
			<label htmlFor="truncate-text" hidden>Text to Truncate</label>
			<input 
				className="text-box" 
				id="truncate-text" 
				type="area"
				placeholder="enter text here"
				value={this.state.text}
				onChange={this.updateField("text")}
				/>
			<label htmlFor="truncate-min">Minimum</label>
			<input 
				className="number-box" 
				id="truncate-min" 
				type="number"
				value={this.state.min}
				max={this.state.ideal}
				onChange={this.updateField("min")}
				/>
			<label htmlFor="truncate-ideal">Ideal</label>
			<input 
				className="number-box" 
				id="truncate-ideal" 
				type="number"
				value={this.state.ideal}
				min={this.state.min}
				max={this.state.max}
				onChange={this.updateField("ideal")}
				/>
			<label htmlFor="truncate-max">Maximum</label>
			<input 
				className="number-box" 
				id="truncate-max" 
				type="number"
				value={this.state.max}
				min={this.state.ideal}
				onChange={this.updateField("max")}
				/>

			<button onClick={this.handleSubmit.bind(this)}>Add Text!</button>
		</form>
		)
	}
};

export default AddText;