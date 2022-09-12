import Swiper, { Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import buildSliders from './buildSwiper';

const someSlider = () => {
	const sliderClass = '.someSlider';
	buildSliders(sliderClass);

	let slideEl = document.querySelectorAll(sliderClass);

	if (typeof (slideEl) !== 'undefined' && slideEl != null) {
		let sliderEl = new Swiper(sliderClass, {
			modules: [Navigation, EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			effect: 'fade',
			speed: 800,
			// loop: true,
			navigation: {
				prevEl: '.slider_arrow--prev',
				nextEl: '.slider_arrow--next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				1023: {
					slidesPerView: 4,
				},
			},

		});
	}
};

export default someSlider;
