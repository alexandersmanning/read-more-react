"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var PUNCTUATION_LIST = [".", ",", "!", "?", "'", "{", "}", "(", ")", "[", "]"];

var trimText = function trimText(text) {
	var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 80;
	var ideal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
	var max = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 200;

	//This main function uses two pointers to move out from the ideal, to find the first instance of a punctuation mark followed by a space. If one cannot be found, it will go with the first space closest to the ideal.

	if (max < min || ideal > max || ideal < min) {
		throw new Error("The minimum length must be less than the maximum, and the ideal must be between the minimum and maximum.");
	}

	if (text.length < ideal) {
		return [text, ''];
	}

	var pointerOne = ideal;
	var pointerTwo = ideal;
	var firstSpace = void 0,
	    resultIdx = void 0;

	var setSpace = function setSpace(idx) {
		if (spaceMatch(text[idx])) {
			firstSpace = firstSpace || idx;
		}
	};

	while (pointerOne < max || pointerTwo > min) {
		if (checkMatch(pointerOne, text, max, min)) {
			resultIdx = pointerOne + 1;
			break;
		} else if (checkMatch(pointerTwo, text, max, min)) {
			resultIdx = pointerTwo + 1;
			break;
		} else {
			setSpace(pointerOne);
			setSpace(pointerTwo);
		}

		pointerOne++;
		pointerTwo--;
	}

	if (resultIdx === undefined) {
		if (firstSpace && firstSpace >= min && firstSpace <= max) {
			resultIdx = firstSpace;
		} else if (ideal - min < max - ideal) {
			resultIdx = min;
		} else {
			resultIdx = max;
		}
	}

	return [text.slice(0, resultIdx), text.slice(resultIdx).trim()];
};

var spaceMatch = function spaceMatch(character) {
	if (character === " ") {
		return true;
	}
};

var punctuationMatch = function punctuationMatch(idx, text) {
	var punctuationIdx = PUNCTUATION_LIST.indexOf(text[idx]);
	if (punctuationIdx >= 0 && spaceMatch(text[idx + 1])) {
		return true;
	}
};

var checkMatch = function checkMatch(idx, text, max, min) {
	if (idx < max && idx > min && punctuationMatch(idx, text)) {
		return true;
	}
};

exports.default = trimText;