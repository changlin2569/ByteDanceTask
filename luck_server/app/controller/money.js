'use strict';

const Controller = require('egg').Controller;

class MoneyController extends Controller {
    async getMoney() {
        const { ctx } = this;

        try {
            const result = await ctx.service.money.getMoney();

            ctx.body = {
                status: 200,
                msg: 'success',
                data: result,
            };
        } catch (err) {
            console.log(err);
            ctx.body = {
                status: 500,
                msg: 'Server error',
                data: null,
            };
        }

    }
}

module.exports = MoneyController;
