import 'ScssComponents/_slider_section.scss';
import Swiper, { Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
// import buildSliders from './buildSwiper';

const someSlider = () => {
	const sliderClass = '.someSlider';
	// buildSliders(sliderClass);

	let slideEl = document.querySelectorAll(sliderClass);

	if (typeof (slideEl) !== 'undefined' && slideEl != null) {
		let sliderEl = new Swiper(sliderClass, {
			modules: [Navigation, EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			slidesPerGroup: 1,
			effect: 'fade',
			allowTouchMove: false,
			speed: 800,
			fadeEffect: {
				crossFade: true,
			},
			// loop: true,
			navigation: {
				prevEl: '.slider_section_slide__content_arrow--prev',
				nextEl: '.slider_section_slide__content_arrow--next',
			},
		});
	}
};

export default someSlider;
