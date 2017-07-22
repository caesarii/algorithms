
const Sorting = require('./Sorting')
const log = require('../utils/log')

// 选择排序实际上是交换排序
class SelectSorting extends Sorting {
    constructor(arr) {
        super()
        this.array = arr
    }
    sort() {
        const arr = this.array
        const len = arr.length

        // 外循环： 从第二个元素开始遍历
        for(let index = 1; index < len; index++){

            // 内循环： 从当前元素往前遍历
            // 如果当前元素小于前面的元素，则交换两个元素
            // 交换次数等于逆序个数
            // 逆序： 一个逆序是指一个顺序颠倒的元素对
            // 逆序个数 <= 比较次数 <= 逆序个数 + len - 1
            for(let jndex = index; jndex > 0; jndex --) {
                // 当前元素
                const current = arr[jndex]
                // 前一个元素
                const prev = arr[jndex - 1]

                // 比较结果
                const less = SelectSorting.less(current, prev)
                // 如果当前元素小于前面的元素，则交换两个元素
                // 冒泡
                if(less) {
                    this.each(jndex, jndex - 1)
                }
            }
        }
    }
}


SelectSorting.test([32, 545, 6, 9, 324, 1, 4, 564,17, 754])

// const testSort = () => {
//     const sort = new SelectSorting([32, 545, 6, 9, 324, 1, 4, 564,17, 754])
//     sort.sort()
//     log(sort.toString())
// }
//
// testSort()