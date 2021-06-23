const axios = require("axios");
const sharp = require("sharp");
const Image = require("image-js").Image;

const getImageObject = async (input) => {
	try {
		let buffer;

		// if input is a string, return a buffer from res.data
		if (typeof input === "string") {
			const response = await axios.request({
				method: "GET",
				url: input,
				responseType: "arraybuffer",
			});

			buffer = response.data;
		} else if (Buffer.isBuffer(input)) {
			buffer = input;
		}

		// convert to png
		const convertedImage = await sharp(buffer)
			.png()
			.toBuffer()
			.catch((err) =>
				console.log("The image may be corrupt, use pngcheck to validate", err)
			);

		// create Image object
		const imageObj = await Image.load(convertedImage).catch((err) =>
			console.log("Image Promise failed", err)
		);

		return imageObj;
	} catch (err) {
		console.log("failed with err: ", err);
	}
};

module.exports = {
	getImageObject,
};
