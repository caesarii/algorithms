const {log, exchange} = require('./utils')

const median = (list, left, right) => {
    const center = Math.floor((left + right) / 2)
    if(list[left] > list[center]) {
        exchange(list, left, center)
    } else if(list[left] > list[right]) {
        exchange(list, left, center)
    } else if(list[center] > list[right]) {
        exchange(list, center, right)
    }
    
    exchange(list, center, right - 1)
    return list[right - 1]
}

const quicksortIter = (list, left, right) => {
    const cutoff = 3
    let pivot
    if(left + cutoff <= right) {
        pivot = median(list, left, right)
        i = left
        j = right - 1
        while(true) {
            while(list[++i] < pivot) {
            
            }
            while(list[--j]) {
            
            }
            if(i < j) {
                exchange(list, i, j)
            } else {
                break
            }
            
            exchange(list, i, right - 1)
            quicksortIter(list, left, i - 1)
            quicksortIter(list, i + 1, right)
            log(list)
        }
    } else {
        log('插入排序')
    }
}

const quicksort = list => {
    const len = list.length
    quicksortIter(list, 0, len - 1)
    return list
}


if(require.main === module) {
    const list = [38, 545, 6, 9, 324, 1, 4, 564, 17, 754]
    const sorted = quicksort(list)
    console.log(sorted)
}