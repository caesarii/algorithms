const {log, exchange} = require('./utils')

const bubblesort = (A) => {
    const num = A.length - 1
    // i 表示需要排序的元素的个数, 第一个元素不需要排序
    // i 循环执行一次就对当前数组的最后一个元素进行一遍冒泡, 也就排好了一个元素
    // i 及 i 之前是排序好的元素
    for(let i = 0; i < num - 1; i++) {
        // 对最后一个元素进行冒泡
        // A[j] 是当前要冒泡的元素
        // A[j] 最高冒泡到 i + 1 的位置
        for(let j = num; j >= i + 1; j --) {
            log('compare', A[j], 'vs', A[j - 1])
            // 对较小的元素进行冒泡
            if(A[j] < A[j - 1]) {
                log('exchange', A[j])
                const tmp = A[j]
                A[j] = A[j - 1]
                A[j - 1] = tmp
            }
            // no bubble
            log()
        }
        log(i, ':', A)
        log()

    }
}


if(require.main === module) {
    const list = [38, 545, 6, 9, 324, 1, 4, 564,17, 754]
    bubblesort(list)
    log(list)
}

module.exports = bubblesort