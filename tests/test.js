const { getBgColor, getBgColorFromPath } = require("../index");
const { expect } = require("chai");

describe("Checking color accuracy", function () {
	it("Should be green", async function () {
		let path = `${__dirname}/colors/green.png`;
		let result = await getBgColorFromPath(path);
		let expected = "#00FF00FF";
		expect(result).to.equal(expected);
	});

	it("Should be red", async function () {
		let path = `${__dirname}/colors/red.png`;
		let result = await getBgColorFromPath(path);
		let expected = "#FF0000FF";
		expect(result).to.equal(expected);
	});

	it("Should be blue", async function () {
		let path = `${__dirname}/colors/blue.png`;
		let result = await getBgColorFromPath(path);
		let expected = "#0000FFFF";
		expect(result).to.equal(expected);
	});

	it("Should be yellow", async function () {
		let path = `${__dirname}/colors/yellow.png`;
		let result = await getBgColorFromPath(path);
		let expected = "#FFFF00FF";
		expect(result).to.equal(expected);
	});

	it("Should be cyan", async function () {
		let path = `${__dirname}/colors/cyan.jpeg`;
		let result = await getBgColorFromPath(path);
		let expected = "#01FFFF";
		expect(result).to.equal(expected);
	});

	it("Should be magenta", async function () {
		let path = `${__dirname}/colors/magenta.jpeg`;
		let result = await getBgColorFromPath(path);
		let expected = "#FF00FE";
		expect(result).to.equal(expected);
	});

	it("Should be white", async function () {
		let path = `${__dirname}/colors/white.jpeg`;
		let result = await getBgColorFromPath(path);
		let expected = "#FFFFFF";
		expect(result).to.equal(expected);
	});

	it("Should be black", async function () {
		let path = `${__dirname}/colors/black.jpeg`;
		let result = await getBgColorFromPath(path);
		let expected = "#000000";
		expect(result).to.equal(expected);
	});
});
