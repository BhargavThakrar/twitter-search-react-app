webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'text-center' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Twitter Search'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    this.props.children
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _timer = __webpack_require__(113);

var _timer2 = _interopRequireDefault(_timer);

var _cards = __webpack_require__(115);

var _cards2 = _interopRequireDefault(_cards);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home(props) {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

		_this.state = {
			cards: [],
			error: false
		};
		return _this;
	}

	_createClass(Home, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.callAPI();
		}

		/*shouldComponentUpdate(nextProps, nextState) {
  	return true;
  }*/

	}, {
		key: 'callAPI',
		value: function callAPI() {
			var _this2 = this;

			fetch('/twitter?api=search').then(function (response) {
				response.json().then(function (posts) {
					if (posts.customCode == 1) {
						_this2.setState({
							cards: posts.data
						});
					} else {
						_this2.setState({
							error: true
						});
					}
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var listNode = null;

			if (this.state.cards.statuses) {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_timer2.default, { cb: this.callAPI.bind(this) }),
					_react2.default.createElement(_cards2.default, { cards: this.state.cards })
				);
			} else {
				var text = "Loading data... please be patient.";

				if (this.state.error) {
					text = "Sorry, something went wrong. Please try after some time.";
				}

				return _react2.default.createElement(
					'div',
					null,
					text
				);
			}
		}
	}]);

	return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var refreshInterval = 60;

var Timer = function (_React$Component) {
	_inherits(Timer, _React$Component);

	function Timer(props) {
		_classCallCheck(this, Timer);

		var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

		_this.state = {
			timer: refreshInterval,
			progress: 100
		};
		return _this;
	}

	_createClass(Timer, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.startTimer();
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			this.setState({
				timer: refreshInterval,
				progress: 100
			});
			this.startTimer();
		}
	}, {
		key: "startTimer",
		value: function startTimer() {
			var _this2 = this;

			var timer = setInterval(function () {
				var current = _this2.state.timer - 1;
				if (current == 0) {
					_this2.props.cb();
					clearInterval(timer);
				}

				_this2.setState({
					timer: current,
					progress: Math.floor(current / refreshInterval * 100)
				});
			}, 1000);
		}
	}, {
		key: "render",
		value: function render() {
			var text = "Data will refresh in " + this.state.timer + " (s)";

			if (this.state.timer == 0) {
				text = "Refreshing data... please be patient.";
			}
			return _react2.default.createElement(
				"div",
				null,
				text,
				_react2.default.createElement(
					"div",
					{ className: "progress-container" },
					_react2.default.createElement(
						"div",
						{ className: "progress" },
						_react2.default.createElement("div", { className: "progress-bar", role: "progressbar", "aria-valuenow": this.state.progress, "aria-valuemin": "0", "aria-valuemax": "100", style: { width: this.state.progress + "%" } })
					)
				)
			);
		}
	}]);

	return Timer;
}(_react2.default.Component);

exports.default = Timer;

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(112);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(71);

var _app = __webpack_require__(110);

var _app2 = _interopRequireDefault(_app);

var _home = __webpack_require__(111);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(
        _reactRouter.Route,
        { path: '/', component: _app2.default },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default })
    )
), document.getElementById('app'));

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cards = function (_React$Component) {
	_inherits(Cards, _React$Component);

	function Cards(props) {
		_classCallCheck(this, Cards);

		var _this = _possibleConstructorReturn(this, (Cards.__proto__ || Object.getPrototypeOf(Cards)).call(this, props));

		_this.state = {};
		_this._handleCardClick = _this._handleCardClick.bind(_this);
		return _this;
	}

	_createClass(Cards, [{
		key: '_handleCardClick',
		value: function _handleCardClick(id) {
			var identifier = 'flip_' + id;

			if (this.state[identifier]) {
				this.setState(_defineProperty({}, identifier, ''));
			} else {
				this.setState(_defineProperty({}, identifier, 'flipped'));
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var listNode = this.props.cards.statuses.map(function (post) {
				var flipClass = _this2.state['flip_' + post.id] ? _this2.state['flip_' + post.id] : "";
				return _react2.default.createElement(
					'div',
					{ className: 'card-container', key: post.id },
					_react2.default.createElement(
						'div',
						{ className: "custom-card cursor " + flipClass, onClick: function onClick() {
								return _this2._handleCardClick(post.id);
							} },
						_react2.default.createElement(
							'div',
							{ className: 'card-body front' },
							post.text
						),
						_react2.default.createElement(
							'div',
							{ className: 'card-body back text-center' },
							_react2.default.createElement('img', { className: 'img-responsive img-circle img-center', src: post.user.profile_image_url }),
							_react2.default.createElement(
								'strong',
								null,
								post.user.name
							),
							_react2.default.createElement('br', null),
							_react2.default.createElement(
								'strong',
								null,
								post.user.location
							)
						)
					)
				);
			});

			return _react2.default.createElement(
				'div',
				null,
				listNode
			);
		}
	}]);

	return Cards;
}(_react2.default.Component);

exports.default = Cards;

/***/ })

},[114]);