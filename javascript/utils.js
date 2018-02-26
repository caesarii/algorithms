const log = (() => {
    return console.log.bind(console)
})()


const exchange = (list, i, j) => {
    // 交换 list 中索引为 i, j的元素
    const temp = list[i]
    list[i] = list[j]
    list[j] = temp
}

const half = n => {
    return Math.floor(n / 2)
}

if(require.main === module) {
    const list = [0, 1, 2]
    exchange(list, 0, 1)
    log('list', list)
}


module.exports = {log, exchange, half, }

