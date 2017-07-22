const Sorting = require('./Sorting')
const log = require('../utils/log')

class ShellSorting extends Sorting {
    constructor(arr) {
        super()
        this.array = arr
    }

    sort() {
        const arr = this.array
        const len = arr.length
        console.log('len',len)
        let h = 1
        while (h < len / 3) {
            h = 3 * h + 1
            console.log('h len', h, len)
        }
        while (h >= 1) {
            for(let index = h; index < len; index++) {
                for(let jndex = index; jndex >= h && Sorting.less(arr[jndex], arr[jndex - h]); jndex -= h) {
                    this.each(jndex, jndex - h)
                }
            }
            h = h / 3
        }
    }

}

ShellSorting.test([32, 545, 6, 9, 324, 1, 4, 564,17, 754])