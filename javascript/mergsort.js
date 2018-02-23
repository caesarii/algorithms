
const {log, exchange} = require('./utils')

const merge = (list, sorted, leftStart, rightStart, rightEnd) => {
    log('sorted', sorted)
    
    const leftEnd = rightStart - 1
    
    // 已排序数组的插入点，leftStart 之前的元素是已排序的
    let index = leftStart
    
    // 元素个数
    const numElements = rightEnd - leftStart + 1
    
    // 按序插入左数组和右数组的元素
    while(leftStart <= leftEnd && rightStart <= rightEnd) {
        if(list[leftStart] <= list[rightStart]) {
            sorted[index++] = list[leftStart ++]
        } else {
            sorted[index++] = list[rightStart++]
        }
    }
    
    // 插入左数组的剩余元素
    while(leftStart <= leftEnd) {
        sorted[index++] = list[leftStart++]
    }
    
    // 插入右数组的剩余元素
    while(rightStart <= rightEnd) {
        sorted[index++] = list[rightStart++]
    }
    
    for(let i = 0; i < numElements; i++, rightEnd--) {
        list[rightEnd] = sorted[rightEnd]
    }
    return list
}

const mergesortIter = (list, sorted, left, right) => {
    let center
    if(left < right) {
        center = Math.floor((left + right) / 2)
        mergesortIter(list, sorted, left, center)
        mergesortIter(list, sorted, center + 1, right)
        merge(list, sorted, left, center + 1, right)
    }
}

const mergesort = list => {
    const len = list.length
    let sorted = []
    mergesortIter(list, sorted, 0, len - 1)
    return sorted
}

if(require.main === module) {
    const list = [38, 545, 6, 9, 324, 1, 4, 564, 17, 754]
    const sorted = mergesort(list)
    log('result', sorted)
}