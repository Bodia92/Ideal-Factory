import 'ScssComponents/_scrollbar_slider_section.scss';
import Swiper, { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

const scrollbarSliderSection = () => {
	const sliderClass = '.scrollbar_slider_section__swiper';

	let slideEl = document.querySelectorAll(sliderClass);

	if (typeof (slideEl) !== 'undefined' && slideEl != null) {
		let sliderEl = new Swiper(sliderClass, {
			modules: [Scrollbar],
			observer: true,
			observeParents: true,
			scrollbar: {
				el: '.scrollbar_slider_section__scrollbar',
				draggable: true,
				dragSize: 'auto',
				dragClass: 'scrollbar_slider_section__scrollbar_drag',
			},
			slidesPerView: 'auto',
			speed: 800,
			loop: true,

			breakpoints: {
				320: {
					spaceBetween: 10,
				},
				992: {
					spaceBetween: 20,
				},
			},
		});
	}
};

export default scrollbarSliderSection;
