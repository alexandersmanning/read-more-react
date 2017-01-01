import React, {Component, PropTypes} from 'react';
import trimText from '../utils/trimText'

export default class ReadMoreReact extends React.Component {
	constructor(props){
		super(props);
		this.state = { displaySecondary: false, primaryText: "", secondaryText: "" };
	}

	componentDidMount() {
		let args = [
			this.props.text, 
			this.props.min,
			this.props.ideal, 
			this.props.max
		];

		let textBreakdown = trimText(...args);
		this.setState({primaryText: textBreakdown[0], secondaryText: textBreakdown[1]});
	}
	
	setStatus() {
		let display = !this.state.displaySecondary;
		this.setState({displaySecondary: display});
	}

	render() {
		let displayText;
		if (!this.state.secondaryText) {
			displayText = (
			<div className="display-text-group">
				<span className="displayed-text">
					{`${this.state.primaryText} ${this.state.secondaryText}`}
				</span>
			</div>);
		}
		else if (this.state.displaySecondary) {
			displayText = (
			<div className="display-text-group">
				<span className="displayed-text">
					{`${this.state.primaryText} ${this.state.secondaryText}`}
				<div className="read-more-button" 
						 onClick={this.setStatus.bind(this)}>read less</div> 
				</span>
			</div>);
		} else {
			displayText = (<div className="display-text-group">
				<span className="displayed-text">
						{`${this.state.primaryText}`}
				<div className="read-more-button"
						 onClick={this.setStatus.bind(this)}>read more</div>
				</span>
			</div>);
		}


		return (	
			<content>
				{ displayText }
			</content>
			);
	}
}

ReadMoreReact.propTypes = {
  text: PropTypes.string.isRequired,
  min: PropTypes.number,
  ideal: PropTypes.number,
  max: PropTypes.number
};
