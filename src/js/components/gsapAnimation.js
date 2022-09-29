// typical import
import gsap from 'gsap';

// get other plugins:
import ScrollTrigger from 'gsap/ScrollTrigger';
import Flip from 'gsap/Flip';
import Draggable from 'gsap/Draggable';

const gsapAnimation = () => {
	gsap.registerPlugin(ScrollTrigger, Draggable, Flip);

	const content = gsap.utils.toArray('.titleAnim');
	const images = gsap.utils.toArray('.imageAnim');
	const text = gsap.utils.toArray('.textAnim');

	content.forEach((box, i) => {
		const anim = gsap.fromTo(box, { autoAlpha: 0, y: 100 }, { duration: 2, autoAlpha: 1, y: 0 });
		ScrollTrigger.create({
			trigger: box,
			animation: anim,
			toggleActions: 'play none none none',
			once: true,
		});
	});
	images.forEach((image, i) => {
		const anim = gsap.fromTo(image, { autoAlpha: 0, opacity: 0 }, {
			duration: 3, autoAlpha: 1, opacity: 1,
		});
		ScrollTrigger.create({
			trigger: image,
			animation: anim,
			toggleActions: 'play none none none',
			once: true,
		});
	});
	text.forEach((text, i) => {
		const anim = gsap.fromTo(text, { autoAlpha: 0, opacity: 0, y: 50 }, {
			duration: 2, autoAlpha: 1, opacity: 1, y: 0,
		});
		ScrollTrigger.create({
			trigger: text,
			animation: anim,
			toggleActions: 'play none none none',
			once: true,
		});
	});
};

export default gsapAnimation;
