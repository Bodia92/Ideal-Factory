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

			breakpoints: {
				320: {
					slidesPerView: 1.3,
				},
				640: {
					slidesPerView: 2.1,
				},
				992: {
					slidesPerView: 2.5,
				},
				1023: {
					slidesPerView: 'auto',
				},
			},
		});
	}
};

export default sliderFullscreen;
