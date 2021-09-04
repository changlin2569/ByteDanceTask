import { reactive, getCurrentInstance } from 'vue'


const order1 = [0, 1, 2, 7, 8, 3, 6, 5, 4];
export default function (price) {
    const { proxy } = getCurrentInstance()
    const prizeList = reactive([])
    const order = reactive([])

    proxy.$http({
        method: 'get',
        url: 'http://127.0.0.1:7001/prizeList'
    }).then(({ data }) => {
        prizeList.push(...data)
        prizeList.splice(9, 0, {
            id: 8,
            price
        })
        order.push(...order1)
    })

    return {
        prizeList,
        order
    }

}