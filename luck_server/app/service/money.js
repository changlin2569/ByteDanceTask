'use strict';

const Service = require('egg').Service;
// const money = require('./../utile/money');

class MoneyService extends Service {
    async getMoney() {
        const { app } = this;
        const QUERY_STR = 'originmoney, price';
        const sql = `select ${QUERY_STR} from money`;

        try {
            const result = await app.mysql.query(sql);
            return result;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    async editPrice(oldprice, price) {
        const { app } = this;

        try {
            const result = await app.mysql.update('money', { price }, {
                where: {
                    price: oldprice,
                },
            });
            return result;
        } catch (err) {
            console.log(err);
            return null;
        }
    }
}

module.exports = MoneyService;
