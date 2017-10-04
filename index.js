'use strict';

const { getFreqStat, translateRaw } = require('./transformer');

const rawData = require('./fixture.json');
const rawKeys = require('./obfascation.json');

function main() {
    const cases = translateRaw(rawData, rawKeys);
}

main();