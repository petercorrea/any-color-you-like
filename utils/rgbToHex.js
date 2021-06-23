const rgbToHex = (rgbArray) => {
	const hexArray = [...rgbArray];

	hexArray.forEach((num, idx, arr) => {
		arr[idx] = num.toString(16);
	});

	hexArray.forEach((num, idx, arr) => {
		if (num.length == 1) {
			arr[idx] = `0${num}`;
		}
	});

	return hexArray.join("").toUpperCase();
};

module.exports = {
	rgbToHex,
};
