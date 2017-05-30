
const Sorting = require('./Sorting')
const log = require('../utils/log')

class SelectSorting extends Sorting {
    constructor(arr) {
        super()
        this.array = arr
    }
    sort() {
        const arr = this.array
        const len = arr.length
        for(let index = 0; index < len; index++){
            // 最小元素索引
            let min = index;
            // 寻找更小的元素
            for(let jndex = index + 1; jndex < len; jndex ++) {
                const minimum = arr[min]
                const compare = arr[jndex]
                const less = SelectSorting.less(compare, minimum)
                if(less) {
                    min = jndex
                }
            }
            this.each(index, min)
        }
    }
}

const testSort = () => {
    const sort = new SelectSorting([32, 545, 6, 9, 324, 1, 4, 564,17, 754])
    sort.sort()
    log(sort.toString())
}

testSort()