'use strict';

function prize() {
    const prizeList = [
        {
            id: 0,
            name: '66矿石',
            img: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
            probability: 100,
        },
        {
            id: 1,
            name: '随机限量徽章',
            img: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71c68de6368548bd9bd6c8888542f911~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
            probability: 20,
        },
        {
            id: 2,
            name: '掘金新款T恤',
            img: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5bf91038a6384fc3927dee294a38006b~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
            probability: 20,
        },
        {
            id: 7,
            name: 'BUG',
            img: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0a4ce25d48b8405cbf5444b6195928d4~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
            probability: 20,
        },
        {
            id: 8,
            name: '抽奖',
            price: 200,
        },
        {
            id: 3,
            name: '乐高海洋巨轮',
            img: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aabe49b0d5c741fa8d92ff94cd17cb90~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
            probability: 20,
        },
        {
            id: 6,
            name: '掘金马克杯',
            img: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab31c183950541d4a0731c0b8765b173~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
            probability: 20,
        },
        {
            id: 5,
            name: 'YoYo抱枕',
            img: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/33f4d465a6a9462f9b1b19b3104c8f91~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
            probability: 20,
        },
        {
            id: 4,
            name: 'switch',
            img: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4decbd721b2b48098a1ecf879cfca677~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp',
            probability: 20,
        },
    ];

    function getPrizeList() {
        return prizeList;
    }

    // 修改奖池
    function editPrizeList(name, options) {
        const index = prizeList.findIndex(item => item.name === name);
        if (~index) {
            const target = prizeList[index];
            Object.assign(target, options);
            return true;
        }
        return false;
    }

    // 修改单价
    function editPrice(price) {
        const [target] = prizeList.filter(item => item.id === 8);
        target.price = price;
        return true;
    }

    return {
        getPrizeList,
        editPrizeList,
    };
}


module.exports = prize();
