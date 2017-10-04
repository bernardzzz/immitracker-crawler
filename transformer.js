'use strict';

exports.translateRaw = function(rawCases, obfascatedKeys) {
    return rawCases
        .map(rawCase => {
            const tr = {}
            for(let key in rawCase) {
                if(!!obfascatedKeys[key]) {
                    tr[obfascatedKeys[key]] = rawCase[key]
                } else {
                    tr[key] = rawCase[key]
                }
            }
            return tr;
        })[0];
}

exports.getFreqStat = function(cases) {
    return cases;
}