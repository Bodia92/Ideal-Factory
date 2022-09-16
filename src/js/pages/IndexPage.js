import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';
import mainSection from '../components/mainSection';
import imageSection from '../components/imageSection';
import imageLeft from '../components/imageLeft';
import someSlider from '../components/sliderSection';
import scrollbarSection from '../components/scrollbarSection';
import sliderFullscreen from '../components/sliderFullscreen';
import cursorBuild from '../components/cursor';

export default class IndexPage {
	constructor() {
		this.init = this.init.bind(this);
	}

	loadFunc() {
		console.log('index page load');
		mainSection();
		imageSection();
		imageLeft();
		someSlider();
		scrollbarSection();
		sliderFullscreen();
		cursorBuild();
	}

	init() {
		this.loadFunc();
	}
}
