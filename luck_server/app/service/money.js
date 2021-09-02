'use strict';

const Service = require('egg').Service;
const money = require('./../utile/money');

class MoneyService extends Service {
    async getMoney() {
        const result = await money.getMoney();
        return result;
    }
}

module.exports = MoneyService;
