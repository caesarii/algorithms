
class Sorting {
    constructor(arr) {
        this.array = arr;
    }
    static less(eleM, eleN) {
        return eleM < eleN
    }
    each(indexA, indexB) {
        const arr = this.array
        const eleA = arr[indexA]
        arr[indexA] = arr[indexB]
        arr[indexB] = eleA
    }
    toString() {
        return this.array.toString()
    }
}

module.exports = Sorting

const log = require('../utils/log')
const testSorting = () => {
    log(Sorting.less(1, 2))
    log(Sorting.each([0, 1, 2], 0, 2))
}

if(require.main === module) {
    testSorting()
}