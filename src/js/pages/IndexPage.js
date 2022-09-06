import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';
import mainSection from '../components/mainSection';
import imageSection from '../components/imageSection';
import imageLeft from '../components/imageLeft';

export default class IndexPage {
	constructor() {
		this.init = this.init.bind(this);
	}

	loadFunc() {
		console.log('index page load');
		mainSection();
		imageSection();
		imageLeft();
	}

	init() {
		this.loadFunc();
	}
}
