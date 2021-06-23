const sharp = require("sharp");
const Image = require("image-js").Image;
const fs = require("fs");

const { getImageObject } = require("./utils/getImage.js");
const { getMostFrequentColor } = require("./utils/getMostFrequentColor.js");
const { getPixelSamples } = require("./utils/getPixelSamples.js");

const getBgColor = async (stringOrBuffer) => {
	const imgObj = await getImageObject(stringOrBuffer);
	const samples = getPixelSamples(imgObj);
	const bgColor = getMostFrequentColor(samples);
	return bgColor;
};

const getBgColorFromPath = async (string) => {
	const file = fs.readFileSync(string);
	const convertedImage = await sharp(file)
		.png()
		.toBuffer()
		.catch((err) =>
			console.log("The image may be corrupt, use pngcheck to validate", err)
		);

	// create Image object
	const imageObj = await Image.load(convertedImage).catch((err) =>
		console.log("Image Promise failed", err)
	);
	const samples = getPixelSamples(imageObj);
	const bgColor = getMostFrequentColor(samples);
	return bgColor;
};

module.exports = {
	getBgColor,
	getBgColorFromPath,
};
