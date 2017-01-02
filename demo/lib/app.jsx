import React from 'react';
import merge from 'lodash/merge';
import ReadMoreReact from '../../source/index.js';
import AddText from './addText';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {textGroup: [{text: "hi, this is short"}, {text:"hi, this is a much longer sentence that needs to be cut off. This is an example of the read more/read less functionality. I hope you enjoy using read more + react!"}]}
	}

	setDefaults() {
		
	}

	addToState(textSpec) {
		let textGroup = this.state.textGroup.concat(textSpec);
		this.setState({textGroup: textGroup});
	}

	render() {
		let errorMessage = "";
		let wordDisplay = this.state.textGroup.map(el => {
			return <ReadMoreReact text={el.text} 
				min={el.min} 
				max={el.max} 
				ideal={el.ideal}/>
			});

		return (
			<div>
				<h1>Hello</h1>
				<div>{errorMessage}</div>
				<AddText addToState={this.addToState.bind(this)}/>
				<ul>
					{
						wordDisplay
					}
				</ul>
			</div>

		);
	};
}

export default App;