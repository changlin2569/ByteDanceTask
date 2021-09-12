module.exports = {
    getWeightSum(list) {
        return list.reduce((total, { probability }) => total += probability, 0)
    },
    getLuckResult(list, sum) {
        for (let i = 0, len = list.length; i < len; i++) {
            const random = Math.random() * sum
            if (random < list[i].probability) {
                return list[i]
            } else {
                sum -= list[i].probability
            }
        }
    }
}