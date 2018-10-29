var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var imgUrls = ["https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781", "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900", "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328", "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg", "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"];

var Carousel = function (_React$Component) {
	_inherits(Carousel, _React$Component);

	function Carousel(props) {
		_classCallCheck(this, Carousel);

		var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

		_this.state = {
			currentImageIndex: 0
		};

		_this.nextSlide = _this.nextSlide.bind(_this);
		_this.previousSlide = _this.previousSlide.bind(_this);
		return _this;
	}

	_createClass(Carousel, [{
		key: "previousSlide",
		value: function previousSlide() {
			var lastIndex = imgUrls.length - 1;
			var currentImageIndex = this.state.currentImageIndex;

			var shouldResetIndex = currentImageIndex === 0;
			var index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

			this.setState({
				currentImageIndex: index
			});
		}
	}, {
		key: "nextSlide",
		value: function nextSlide() {
			var lastIndex = imgUrls.length - 1;
			var currentImageIndex = this.state.currentImageIndex;

			var shouldResetIndex = currentImageIndex === lastIndex;
			var index = shouldResetIndex ? 0 : currentImageIndex + 1;

			this.setState({
				currentImageIndex: index
			});
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "carousel" },
				React.createElement(Arrow, { direction: "left", clickFunction: this.previousSlide, glyph: "\u25C0" }),
				React.createElement(ImageSlide, { url: imgUrls[this.state.currentImageIndex] }),
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
	var url = _ref2.url;

	var styles = {
		backgroundImage: "url(" + url + ")",
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	};

	return React.createElement("div", { className: "image-slide", style: styles });
};

ReactDOM.render(React.createElement(Carousel, null), document.getElementById('content'));