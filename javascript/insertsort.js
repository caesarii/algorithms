const {log, exchange} = require('./utils')

const insertsort = (list) => {
    const length = list.length

    // 外循环： 从第二个元素开始遍历
    for(let current = 1; current < length; current++){

        // 内循环： 从当前元素往前遍历
        // 如果当前元素小于前面的元素，则交换两个元素
        // 交换次数等于逆序个数
        // 逆序： 一个逆序是指一个顺序颠倒的元素对
        // 逆序个数 <= 比较次数 <= 逆序个数 + len - 1
        for(let prev = current; prev > 0; prev --) {
            // 如果当前元素小于前面的元素，则交换两个元素
            if(list[prev] < list[prev - 1]) {
                exchange(list, prev, prev - 1)
            }
        }
    }
    return list
}


if(require.main === module) {
    const list = [38, 545, 6, 9, 324, 1, 4, 564,17, 754]
    
    const sorted = insertsort(list)
    console.log(sorted)
}

module.exports = insertsort