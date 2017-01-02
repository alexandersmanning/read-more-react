import React from 'react';
import merge from 'lodash/merge';
import ReadMoreReact from '../../source/index.js';
import AddText from './addText';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {textGroup: []}
		this.setDefaults = this.setDefaults.bind(this);
	}

	setDefaults() {
		let exampleText = [
			"This is a short sentence. Since it is shorter than the ideal length, it is not split up.",
			"This is an example of a longer sentence that needs to be split up, since it is over ideal length of 100 characters. When the sentence goes past the max allowed characters, the module will find the first punctuation character that is closest to the ideal length to cut it off.",
			"What I highly recommended is creating hobbies together and exploring new things together. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time.",
			"We shall not cease from exploration / And the end of all our exploring / Will be to arrive where we started / And know the place for the first time." ,
			"It's like in the great stories, Mr. Frodo. The ones that really mattered. Full of darkness and danger they were. And sometimes you didn't want to know the end... because how could the end be happy? How could the world go back to the way it was when so much bad had happened? But in the end, it's only a passing thin... this shadow. Even darkness must pass.",
			"I decline to accept the end of man... I refuse to accept this. I believe that man will not merely endure: he will prevail. He is immortal, not because he alone among the creatures has an inexhaustible voice, but because he has a soul, a spirit capable of compassion and sacrifice and endurance. The poet's, the writer's, duty is to write about these things. It is his privilege to help man endure by lifting his heart, by reminding him of the courage and honor and hope and pride and compassion and pity and sacrifice which have been the glory of his past. The poet's voice need not merely be the record of man, it can be one of the props, the pillars to help him endure and prevail."
		]

		let textGroup = exampleText.map(el => ( {text: el} ))
		this.setState({textGroup: textGroup})
	}

	componentWillMount() {
		this.setDefaults();
	}

	addToState(textSpec) {
		let textGroup = this.state.textGroup.concat(textSpec);
		this.setState({textGroup: textGroup});
	}

	render() {
		let errorMessage = "";
		let wordDisplay = this.state.textGroup.map((el, idx) => {
			return <ReadMoreReact key={idx} text={el.text} 
				min={el.min} 
				max={el.max} 
				ideal={el.ideal}/>
			});

		return (
			<div>
				<h1 className="title">Read More + React</h1>
				<div>{errorMessage}</div>
				<AddText addToState={this.addToState.bind(this)}/>
				<ul className="text-display-group">
					{
						wordDisplay
					}
				</ul>
			</div>

		);
	};
}

export default App;