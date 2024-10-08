const originalSrcArray = [
    'assets/images/icons/follow-sloclap-icon.png',
    'assets/images/icons/follow-kepler-icon.png',
    'assets/images/icons/follow-unreal-icon.png'
];

const hoverSrcArray = [
	'assets/images/icons/follow-sloclap-icon-hover.png',
	'assets/images/icons/follow-kepler-icon-hover.png',
	'assets/images/icons/follow-unreal-icon-hover.png'
];

export const inputDarkLogos = () => {
	document.querySelectorAll('.social-logo_dark').forEach((img, index) => {
		img.src = originalSrcArray[index];

		img.addEventListener('mouseenter', () => {
			img.src = hoverSrcArray[index];
		});

		img.addEventListener('mouseleave', () => {
			img.src = originalSrcArray[index];
		});
	});
}