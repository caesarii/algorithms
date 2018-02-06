const log = (() => {
    return console.log.bind(console)
})()


const exchange = (list, i, j) => {
    // 交换 list 中索引为 i, j的元素
    const temp = list[i]
    list[i] = list[j]
    list[j] = temp
    return list
}

const less = (eleA, eleB) => {
    return eleA < eleB
}
module.exports = {log, exchange}

