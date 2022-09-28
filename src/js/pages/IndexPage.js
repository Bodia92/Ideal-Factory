import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';
import imageCenterSection from '../components/imageCenterSection';
import someSlider from '../components/sliderSection';
import scrollbarSliderSection from '../components/scrollbarSliderSection';
import sliderFullscreen from '../components/sliderFullscreen';
import customiserSection from '../components/customiserSection';
import marketplaceSection from '../components/marketplaceSection';
import makersSection from '../components/makersSection';
import scrollToSection from '../components/scrollToSection';
import gsapAnimation from '../components/gsapAnimation';

export default class IndexPage {
	constructor() {
		this.init = this.init.bind(this);
	}

	loadFunc() {
		console.log('index page load');
		imageCenterSection();
		someSlider();
		scrollbarSliderSection();
		sliderFullscreen();
		customiserSection();
		marketplaceSection();
		makersSection();
		scrollToSection();
		gsapAnimation();
	}

	init() {
		this.loadFunc();
	}
}
