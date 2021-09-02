import { reactive, getCurrentInstance } from 'vue'

export default function () {
    const { proxy } = getCurrentInstance()
    const prizeList = reactive([])

    proxy.$http({
        method: 'get',
        url: 'http://127.0.0.1:7001/prizeList'
    }).then(({ data }) => {
        prizeList.push(...data)
    })

    return {
        prizeList
    }

}