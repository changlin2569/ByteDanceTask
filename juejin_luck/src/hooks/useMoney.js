import { ref, getCurrentInstance } from 'vue'

export default function () {
    const { proxy } = getCurrentInstance()
    const originMoney = ref(400)
    const price = ref(200)

    proxy.$http({
        url: 'http://127.0.0.1:7001/money/getMoney'
    }).then(({ data: [money] }) => {
        console.log(money);
        originMoney.value = money.originmoney;
        price.value = money.price;
    })


    return {
        originMoney,
        price
    }
}