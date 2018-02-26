const {log, exchange} = require('./utils')

const perdown = (list, current, length) => {
    // left child
    let child = current * 2 + 1
    while (child < length) {
        // 选择子节点中的较大者
        if(child + 1 !== length && list[child + 1] > list[child]) {
            child = child + 1
        }
        // 下滤
        if(list[child] > list[current]) {
            exchange(list, current, child)
        }
        current = child
        child = current * 2 + 1
    }
    
}

const heapsort = list => {
    const length = list.length
    // 建立 max 堆
    for(let i = Math.floor(length / 2); i >= 0; i--) {
        perdown(list, i , length)
    }
    
    for(let i = length - 1; i > 0; i--) {
        // 交换第一个元素与最后最后一个元素
        exchange(list, 0, i)
        // 恢复堆序性质
        perdown(list, 0, i)
    }
}

if(require.main === module) {
    const l = [38, 545, 6, 9, 324, 1, 4, 564,17, 754]
    const list = [31, 41, 59, 26, 53, 58, 97]
    heapsort(l)
    log(l)
}