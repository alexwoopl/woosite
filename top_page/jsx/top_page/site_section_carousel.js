const sections = JSON.parse(context.sections);

class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentSectionIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	previousSlide () {
		const lastIndex = sections.length - 1;
		const { currentSectionIndex } = this.state;
		const shouldResetIndex = currentSectionIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentSectionIndex - 1;
		
		this.setState({
			currentSectionIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = sections.length - 1;
		const { currentSectionIndex } = this.state;
		const shouldResetIndex = currentSectionIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentSectionIndex + 1;

		this.setState({
			currentSectionIndex: index
		});
	}
	
	render () {
		return (
			<div className="carousel">
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
				<ImageSlide image={ sections[this.state.currentSectionIndex]["fields"]["image"] }
				link={ sections[this.state.currentSectionIndex]["fields"]["url"] }
				text={ sections[this.state.currentSectionIndex]["fields"]["name"] } />
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
			</div>
		);
	}
}

const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
		{ glyph } 
	</div>
);

const ImageSlide = ({ image, link, text }) => {
	const styles = {
		backgroundImage: `url(${image})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	};
	
	return (
		<div className="image-slide" style={styles}>
		    { text }
		    <a className="site-link" href={ link }  />
		</div>
	);
}

ReactDOM.render(
  <Carousel />,
  document.getElementById('content')
);
