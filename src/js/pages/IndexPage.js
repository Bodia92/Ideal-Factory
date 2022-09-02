import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';
import mainSection from '../components/mainSection';

export default class IndexPage {
	constructor() {
		this.init = this.init.bind(this);
	}

	loadFunc() {
		console.log('index page load');
		mainSection();
	}

	init() {
		this.loadFunc();
	}
}
