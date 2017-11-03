'use strict';

module.exports = function isX(operator) {
    const X = -9999999999999999;
    if (typeof operator == 'number') {
        return operator === X;
    }
    else {
        return false;
    }
};
