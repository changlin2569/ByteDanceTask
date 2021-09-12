import { reactive, getCurrentInstance } from 'vue'


export default function (price) {
    const { proxy } = getCurrentInstance()
    const prizeList = reactive([])

    proxy.$http({
        method: 'get',
        url: 'http://127.0.0.1:7001/prizeList'
    }).then(({ data }) => {
        prizeList.push(...data)
        console.log(prizeList);
        // prizeList.splice(9, 0, {
        //     id: 8,
        //     price
        // })
    })

    return {
        prizeList
    }

}