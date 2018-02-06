const {log, exchange} = require('./utils')

const floor = Math.floor

const shellsort = (list) => {
    // 增量序列 [ len / 2, pre / 2, ...]
    // 每一趟增量 incre 排序之后, 对于元素 i, i + incre, i + incre*2.. 是排序好的, 直到 i, i+1, i+2 是排序好的
    
    const length = list.length
    let temp
    let j
    for(let increment = floor(length / 2); increment > 0; increment = floor(increment / 2)) {
        // 增量序列 [ 5, 2, 1 ]
        for(let i = increment; i < length; i++) {
            temp = list[i]
            for(j = i; j >= increment; j -= increment) {
                if(temp < list[j - increment]) {
                    list[j] = list[j - increment]
                } else {
                    break
                }
            }
            list[j] = temp
        }
    }
    return list
}

if(require.main === module) {
    const list = [38, 545, 6, 9, 324, 1, 4, 564, 17, 754]
    const sorted = shellsort(list)
    console.log(sorted)
}