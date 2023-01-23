import 'ScssComponents/_slider_fullscreen.scss';
import Swiper, { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

const sliderFullscreen = () => {
	const sliderClass = '.slider_fullscreen__swiper';

	let $slideEl = document.querySelectorAll(sliderClass);

	if ($slideEl !== undefined) {
		let $sliderEl = new Swiper(sliderClass, {
			modules: [Scrollbar],

			slidesPerView: 'auto',
			speed: 1200,
			// loop: true,

			breakpoints: {
				320: {
					slidesPerView: 1.2,
				},
				768: {
					slidesPerView: 1.78,
				},
				992: {
					scrollbar: {
						el: '.slider_fullscreen__scrollbar',
						draggable: true,
						dragSize: 'auto',
						dragClass: 'slider_fullscreen__drag',
					},
					slidesPerView: 2.6,
				},
			},
		});
	}
};

export default sliderFullscreen;
