'use strict';

const assert = require('assert');
const isX = require('./template');

assert.equal(isX(-9999999999999999), true, 'NAY!');
assert.equal(isX(0), false, '0 is not -9999999999999999');
assert.equal(isX(Symbol(9)), false, 'Symbol(9) is not -9999999999999999');
assert.equal(isX('15'), false, '"15" is not -9999999999999999');
assert.equal(isX(9999999999999999), false, '9999999999999999 is not -9999999999999999');
assert.equal(isX('nine quadrillion nine hundred ninety nine trillion nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine'), false, '"nine quadrillion nine hundred ninety nine trillion nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine" is not -9999999999999999');
assert.equal(isX('-nine quadrillion nine hundred ninety nine trillion nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine'), false, '"-nine quadrillion nine hundred ninety nine trillion nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine" is not -9999999999999999');
