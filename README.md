## Description

This package does one thing only, it samples 20 pixels across the borders of an image and returns the most frequently appearing color.
<br/><br/>

## API

`getBgColor(string | buffer)`: an async function that accepts either a string representing a URL or the raw buffer data of the image. Returns the most frequent color in hexadecimal format.
<br/><br/>

`getBgColorFromPath(string)`: an async function that accepts a string representing a path to the image. Returns the most frequent color in hexadecimal format.
<br/><br/>

## Scripts

`npm test` will test that the function works as expected for red, blue, green, cyan, yellow, magenta, black and white.
<br/><br/>
