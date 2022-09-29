const scrollToSection = () => {
	const $scrollBtn = document.querySelector('.main_section__btn');
	const $section = document.querySelectorAll('.section');
	let position = 0;
	let heightSection = Math.ceil(document.documentElement.clientHeight);
	let positionSection;
	let scrollCord;

	const scrollToNext = () => {
		if ($scrollBtn && $section) {
			position = Math.ceil(window.pageYOffset);
			positionSection = Math.abs(position - heightSection);
			if (position === 0) {
				scrollCord = positionSection;
			} else {
				scrollCord = Math.abs((position + heightSection) - (position % heightSection));
			}
			window.scrollTo({
				top: scrollCord,
				behavior: 'smooth',
			});
		}
	};

	$scrollBtn.addEventListener('click', () => {
		scrollToNext();
	});
};

export default scrollToSection;
