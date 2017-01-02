# Read More + React
Read More + React is a simple npm component for react that "intelligently" truncates text at the appropriate point given a min, an ideal, and max text length. The idea is to cut off at the best point, and not just a specific character, cutting words short. 

[Demo of Read More + React][demoSite]
[demoSite]: http://www.alexandersmanning.com/read-more-react/

## How to Use 

### With React
Read More + React is extraordinarily simple to use with react. You only need to add one prop, text. 

#### Install and Import
```
npm install --save read-more-react
import ReadMoreReact from 'read-more-react';
```

#### Use
```
<ReadMoreReact text={yourTextHere} />
```

Additional Parameters: You can customize the starting point (min), the ideal length (ideal), and the max length (max). The defaults for these are 80, 100, and 200 characters respectively. 

| Parameter | Default Value (characters) |
|-----------|----------------------------|
| min       | 80                         |
| ideal     | 100                        |
| max       | 200                        |


```javascript
<ReadMoreReact text={yourTextHere}
			min={minimumLength}
			ideal={idealLength}
			max={maxLength} />
```

Example:

```
npm install --save read-more-react
```

```javascript
import ReadMoreReact from 'read-more-react';

class DemoClass extends React.Component {

	render() { 
		return (
			<ReadMoreReact text={yourTextHere}
				min={minimumLength}
				ideal={idealLength}
				max={maxLength} />
		) 
	}
}
```

### Without React
The logic for truncation can all be found in the [trimText][trimtext] file under source/utils. The trimText function can be imported, and takes 4 parameters: text (required), min (default: 80), ideal (default: 100), max (default: 200)

[trimtext]: https://github.com/alexandersmanning/read-more-react/blob/master/source/utils/trimText.js

```javascript
import trimText from './source/utils/trimText.js';

let textArray = trimText("this is some text", 10, 20, 100);
console.log(textArray[0]) //"this is some text";
console.log(textArray[1]) //""
```

## Future Steps

### More Intelligent Truncation
My hope is to add more intelligent truncation through adding a weight to each punctuation mark based on average sentence breakdowns, to figure out when it is best to cut off a text block. A example of this would be giving more weight to a period than a comma, so that a period close to a comma (although further from the ideal), can become the cutoff point. 


