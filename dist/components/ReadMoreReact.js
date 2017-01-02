'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _trimText = require('../utils/trimText');

var _trimText2 = _interopRequireDefault(_trimText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadMoreReact = function (_React$Component) {
	_inherits(ReadMoreReact, _React$Component);

	function ReadMoreReact(props) {
		_classCallCheck(this, ReadMoreReact);

		var _this = _possibleConstructorReturn(this, (ReadMoreReact.__proto__ || Object.getPrototypeOf(ReadMoreReact)).call(this, props));

		_this.state = { displaySecondary: false, primaryText: "", secondaryText: "" };
		return _this;
	}

	_createClass(ReadMoreReact, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var args = [this.props.text, this.props.min, this.props.ideal, this.props.max];

			var textBreakdown = _trimText2.default.apply(undefined, args);
			this.setState({ primaryText: textBreakdown[0], secondaryText: textBreakdown[1] });
		}
	}, {
		key: 'setStatus',
		value: function setStatus() {
			var display = !this.state.displaySecondary;
			this.setState({ displaySecondary: display });
		}
	}, {
		key: 'render',
		value: function render() {
			var displayText = void 0;
			if (!this.state.secondaryText) {
				displayText = _react2.default.createElement(
					'div',
					{ className: 'display-text-group' },
					_react2.default.createElement(
						'span',
						{ className: 'displayed-text' },
						this.state.primaryText + ' ' + this.state.secondaryText
					)
				);
			} else if (this.state.displaySecondary) {
				displayText = _react2.default.createElement(
					'div',
					{ className: 'display-text-group' },
					_react2.default.createElement(
						'span',
						{ className: 'displayed-text' },
						this.state.primaryText + ' ' + this.state.secondaryText,
						_react2.default.createElement(
							'div',
							{ className: 'read-more-button',
								onClick: this.setStatus.bind(this) },
							'read less'
						)
					)
				);
			} else {
				displayText = _react2.default.createElement(
					'div',
					{ className: 'display-text-group' },
					_react2.default.createElement(
						'span',
						{ className: 'displayed-text' },
						'' + this.state.primaryText,
						_react2.default.createElement(
							'div',
							{ className: 'read-more-button',
								onClick: this.setStatus.bind(this) },
							'read more'
						)
					)
				);
			}

			return _react2.default.createElement(
				'content',
				null,
				displayText
			);
		}
	}]);

	return ReadMoreReact;
}(_react2.default.Component);

exports.default = ReadMoreReact;


ReadMoreReact.propTypes = {
	text: _react.PropTypes.string.isRequired,
	min: _react.PropTypes.number,
	ideal: _react.PropTypes.number,
	max: _react.PropTypes.number
};