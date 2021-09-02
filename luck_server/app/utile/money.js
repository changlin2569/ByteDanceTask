'use strict';

function money() {
    const money = 400;

    function getMoney() {
        return money;
    }

    return {
        getMoney,
    };
}

module.exports = money();
