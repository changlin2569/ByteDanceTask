import { ref, getCurrentInstance } from 'vue'

export default function () {
    const { proxy } = getCurrentInstance()
    const money = ref(200)

    proxy.$http({
        url: 'http://127.0.0.1:7001/money/getMoney'
    }).then(({ data }) => {
        money.value = data
    })


    return {
        money
    }
}