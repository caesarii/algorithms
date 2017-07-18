
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

        // 外循环： 对所有元素进行遍历，交换当前元素与排在后面的最小的元素
        // 总交换次数： N
        for(let index = 0; index < len; index++){
            // 当前最小的元素的索引，默认是第一个元素
            let min = index;

            // 内循环： 寻找排在当前元素后面的最小的元素
            // 总比较次数： N-1 + N-2 + N-3 + ... + 2 + 1 = N(N-1)/2
            for(let jndex = index + 1; jndex < len; jndex ++) {
                // 当前最小元素
                const minimum = arr[min]
                // 待比较的元素
                const compare = arr[jndex]

                // 比较结果
                const less = SelectSorting.less(compare, minimum)
                // 如果待比较元素小于当前最小元素，则记录该元素的索引
                if(less) {
                    min = jndex
                }
            }
            // 无论比较结果如何，都交换当前元素与最小元素
            // min 可能是比 index 更小的元素，也可能是 index 本身
            this.each(index, min)
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