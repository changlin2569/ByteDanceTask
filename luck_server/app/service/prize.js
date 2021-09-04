'use strict';

const Service = require('egg').Service;
// const prize = require('./../utile/prize');

class PrizeService extends Service {
    async getPrizeList() {
        const { app } = this;
        const QUERY_STR = 'id, name';
        const sql = `select ${QUERY_STR} from prizelist`;
        try {
            const result = await app.mysql.query(sql);
            return result;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    async editPrizeList(name, options) {
        const { app } = this;

        try {
            const result = await app.mysql.update('prizelist', options, {
                where: { name },
            });
            return result;
        } catch (err) {
            console.log(err);
            return null;
        }
    }
}

module.exports = PrizeService;
