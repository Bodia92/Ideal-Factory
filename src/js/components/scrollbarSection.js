import 'ScssComponents/_scrollbar_section.scss';
import Swiper, { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

const scrollbarSection = () => {
	const sliderClass = '.scrollbar_section';

	let slideEl = document.querySelectorAll(sliderClass);

	if (typeof (slideEl) !== 'undefined' && slideEl != null) {
		let sliderEl = new Swiper(sliderClass, {
			modules: [Scrollbar],
			observer: true,
			observeParents: true,
			spaceBetween: 20,
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
				dragSize: 'auto',
			},
			slidesPerView: 'auto',
			slidesPerGroup: 1,
			speed: 800,
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

export default scrollbarSection;
