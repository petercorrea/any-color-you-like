const { rgbToHex } = require("./rgbToHex.js");

const getPixelSamples = (image) => {
	const samplesPath = [
		// left
		[10, 5],
		[10, 6],
		[10, 7],
		[10, 8],
		[10, 9],

		// right
		[image.width - 10, 5],
		[image.width - 10, 6],
		[image.width - 10, 7],
		[image.width - 10, 8],
		[image.width - 10, 9],

		// top
		[Math.floor(image.width / 2), image.height - 10],
		[Math.floor(image.width / 2) + 1, image.height - 10],
		[Math.floor(image.width / 2) + 2, image.height - 10],
		[Math.floor(image.width / 2) + 3, image.height - 10],
		[Math.floor(image.width / 2) + 4, image.height - 10],

		// bottom
		[Math.floor(image.width / 2), 10],
		[Math.floor(image.width / 2) + 1, 10],
		[Math.floor(image.width / 2) + 2, 10],
		[Math.floor(image.width / 2) + 3, 10],
		[Math.floor(image.width / 2) + 4, 10],
	];

	return samplesPath.map(
		(sample) => "#" + rgbToHex(image.getPixelXY(sample[0], sample[1]))
	);
};

module.exports = {
	getPixelSamples,
};
