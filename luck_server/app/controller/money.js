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

    // 修改单价
    async editPrice() {
        const { ctx } = this;

        const { oldprice, price } = ctx.request.body;

        if (!price) {
            ctx.body = {
                status: 414,
                msg: '单价不能为0哦',
            };
        }

        try {
            await ctx.service.money.editPrice(oldprice, price);

            ctx.body = {
                status: 200,
                msg: '修改成功',
            };
        } catch (err) {
            console.log(err);

            ctx.body = {
                status: 500,
                msg: 'Server error',
            };
        }
    }
}

module.exports = MoneyController;
