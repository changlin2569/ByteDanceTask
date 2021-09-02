'use strict';

const Controller = require('egg').Controller;

class PrizeController extends Controller {
    // 获取奖池
    async getPrizeList() {
        const { ctx } = this;
        try {
            const result = await ctx.service.prize.getPrizeList();

            ctx.body = {
                status: 200,
                data: result,
                msg: 'success',
            };

            return;
        } catch (err) {
            console.log(err);
            ctx.body = {
                status: 500,
                data: null,
                msg: 'Server error',
            };
        }
    }

    // 修改奖池
    async editPrizeList() {
        const { ctx } = this;

        const { oldName = '', newName = '', imgSrc = '', probability = -1 } = ctx.request.body;

        console.log(oldName);

        if (!oldName || !newName || !imgSrc || !~probability) {
            ctx.body = {
                status: 414,
                mag: '参数不能为空',
            };
            return;
        }

        try {
            const result = await ctx.service.prize.editPrizeList(oldName, { name: newName, img: imgSrc, probability });
            if (result) {
                ctx.body = {
                    status: 200,
                    msg: 'success',
                };
            } else {
                ctx.body = {
                    status: 414,
                    msg: '未知错误，修改失败',
                };
            }
        } catch (err) {
            console.log(err);
            ctx.body = {
                status: 500,
                msg: 'Server error',
            };
        }
    }

    // 获得抽奖结果
    async getLuckResult() {
        const { ctx } = this;

        const random = Math.random() * 100;
        ctx.body = {
            status: 200,
            data: random,
        };
    }

    // 修改单价
    async editPrice() {
        const { ctx } = this;

        const { price } = ctx.request.body;

        if (!price) {
            ctx.body = {
                status: 414,
                msg: '单价不能为0哦',
            };
        }

        try {
            await ctx.service.prize.editPrice(price);

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

module.exports = PrizeController;
