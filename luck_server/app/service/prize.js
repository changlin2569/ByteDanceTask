'use strict';

const Service = require('egg').Service;
const prize = require('./../utile/prize');

class PrizeService extends Service {
    async getPrizeList() {
        const result = prize.getPrizeList();
        return result;
    }

    async editPrizeList(name, options) {
        const result = prize.editPrizeList(name, options);
        return result;
    }

    async editPrice(price) {
        const result = prize.editPrice(price);
        return result;
    }
}

module.exports = PrizeService;
