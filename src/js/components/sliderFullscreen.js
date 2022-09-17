import 'ScssComponents/_slider_fullscreen.scss';
import Swiper, { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

const sliderFullscreen = () => {
	const sliderClass = '.slider_fullscreen__swiper';

	let slideEl = document.querySelectorAll(sliderClass);

	if (typeof (slideEl) !== 'undefined' && slideEl != null) {
		let sliderEl = new Swiper(sliderClass, {
			modules: [Scrollbar],
			scrollbar: {
				el: '.slider_fullscreen__scrollbar',
				draggable: true,
				dragSize: 'auto',
				dragClass: 'slider_fullscreen__drag',
			},
			slidesPerView: 'auto',
			speed: 1200,
			// loop: true,
		});
	}
};

export default sliderFullscreen;
