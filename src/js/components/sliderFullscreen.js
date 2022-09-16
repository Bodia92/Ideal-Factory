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
				el: '.swiper-scrollbar',
				draggable: true,
				dragSize: 'auto',
			},
			slidesPerView: 'auto',
			speed: 800,
			// loop: true,
		});
	}
};

export default sliderFullscreen;
