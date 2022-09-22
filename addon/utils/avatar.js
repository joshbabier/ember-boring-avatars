/*
=====
MIT License

Copyright (c) 2021 boringdesigners

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
====

The following is taken from:
https://github.com/boringdesigners/boring-avatars/blob/master/src/lib/utilities.js
and slightly reformatted.
*/

export const hashCode = (name) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    let character = name.charCodeAt(i);
    hash = ((hash << 5) - hash) + character;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

export const getModulus = (num, max) => {
  return num % max;
};

export const getDigit = (number, ntn) => {
  return Math.floor((number / Math.pow(10, ntn)) % 10);
};

export const getBoolean = (number, ntn) => {
  return (!((getDigit(number, ntn)) % 2));
};

export const getAngle = (x, y) => {
  return Math.atan2(y, x) * 180 / Math.PI;
};

export const getUnit = (number, range, index) => {
  let value = number % range;

  if (index && ((getDigit(number, index) % 2) === 0)) {
    return -value;
  } else {
    return value;
  }
};

export const getRandomColor = (number, colors, range) => {
  return colors[(number) % range];
};

export const getContrast = (hexcolor) => {

  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === '#') {
    hexcolor = hexcolor.slice(1);
  }

  // Convert to RGB value
  let r = parseInt(hexcolor.substr(0, 2), 16);
  let g = parseInt(hexcolor.substr(2, 2), 16);
  let b = parseInt(hexcolor.substr(4, 2), 16);

  // Get YIQ ratio
  let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

  // Check contrast
  return (yiq >= 128) ? '#000000' : '#FFFFFF';
};
