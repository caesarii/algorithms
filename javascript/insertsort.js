const {log, exchange} = require('./utils')

const insertsort = (list) => {
    const length = list.length
    
    // 从第二个元素开始遍历数组
    for(let current = 1; current < length; current++){
        // 从当前元素往前遍
        for(let prev = current; prev > 0; prev --) {
            // 如果当前元素小于前面的元素，则交换两个元素
            if(list[prev] < list[prev - 1]) {
                exchange(list, prev, prev - 1)
            }
        }
    }
}


if(require.main === module) {
    const list = [38, 545, 6, 9, 324, 1, 4, 564,17, 754]
    insertsort(list)
    log(list)
}

module.exports = insertsort