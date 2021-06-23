# AnyColorYouLike

## Description

This package does one thing only. It samples 20 pixels across the borders of an image and returns the most frequently appearing color.
<br/><br/>

## API

`getBgColor(string | buffer)`: an async function that accepts either a string representing a URL or the raw buffer data of the image. Returns the most frequent color in hexadecimal format.
<br/><br/>

## Scripts

`npm test` will test that the function works as expected for both string and buffer inputs.
<br/><br/>