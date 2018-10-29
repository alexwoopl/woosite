var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sections = JSON.parse(context.sections);

var Carousel = function (_React$Component) {
	_inherits(Carousel, _React$Component);

	function Carousel(props) {
		_classCallCheck(this, Carousel);

		var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

		_this.state = {
			currentSectionIndex: 0
		};

		_this.nextSlide = _this.nextSlide.bind(_this);
		_this.previousSlide = _this.previousSlide.bind(_this);
		return _this;
	}

	_createClass(Carousel, [{
		key: "previousSlide",
		value: function previousSlide() {
			var lastIndex = sections.length - 1;
			var currentSectionIndex = this.state.currentSectionIndex;

			var shouldResetIndex = currentSectionIndex === 0;
			var index = shouldResetIndex ? lastIndex : currentSectionIndex - 1;

			this.setState({
				currentSectionIndex: index
			});
		}
	}, {
		key: "nextSlide",
		value: function nextSlide() {
			var lastIndex = sections.length - 1;
			var currentSectionIndex = this.state.currentSectionIndex;

			var shouldResetIndex = currentSectionIndex === lastIndex;
			var index = shouldResetIndex ? 0 : currentSectionIndex + 1;

			this.setState({
				currentSectionIndex: index
			});
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "carousel" },
				React.createElement(Arrow, { direction: "left", clickFunction: this.previousSlide, glyph: "\u25C0" }),
				React.createElement(ImageSlide, { image: sections[this.state.currentSectionIndex]["fields"]["image"],
					link: sections[this.state.currentSectionIndex]["fields"]["url"],
					text: sections[this.state.currentSectionIndex]["fields"]["name"] }),
				React.createElement(Arrow, { direction: "right", clickFunction: this.nextSlide, glyph: "\u25B6" })
			);
		}
	}]);

	return Carousel;
}(React.Component);

var Arrow = function Arrow(_ref) {
	var direction = _ref.direction,
	    clickFunction = _ref.clickFunction,
	    glyph = _ref.glyph;
	return React.createElement(
		"div",
		{
			className: "slide-arrow " + direction,
			onClick: clickFunction },
		glyph
	);
};

var ImageSlide = function ImageSlide(_ref2) {
	var image = _ref2.image,
	    link = _ref2.link,
	    text = _ref2.text;

	var styles = {
		backgroundImage: "url(" + image + ")",
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	};

	return React.createElement(
		"div",
		{ className: "image-slide", style: styles },
		text,
		React.createElement("a", { className: "site-link", href: link })
	);
};

ReactDOM.render(React.createElement(Carousel, null), document.getElementById('content'));