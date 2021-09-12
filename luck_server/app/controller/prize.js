'use strict';

const Controller = require('egg').Controller;
const result = require('./../utile/result');
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
    // async getLuckResult() {
    //     const { ctx } = this;

    //     const random = Math.random() * 100;
    //     ctx.body = {
    //         status: 200,
    //         data: random,
    //     };
    // }

    async getLuckResult() {
        const { ctx } = this;

        try {
            const prizeList = await ctx.service.prize.getPrizeList()
            const sum = result.getWeightSum(prizeList)
            const res = result.getLuckResult(prizeList, sum)

            ctx.body = {
                status: 200,
                msg: 'success',
                data: res
            }
        } catch (e) {
            console.log(e);

            ctx.body = {
                status: 500,
                msg: 'server error',
                data: null
            }
        }
    }

}

module.exports = PrizeController;
