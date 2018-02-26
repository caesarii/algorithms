
const {log, exchange} = require('./utils')

const merge = (list, left, center, right) => {
    // list 被 left  center, right 分割为三部分
    // left 之前是已经排序的元素
    // left - center 是当前要合并的左数组，不包含 center
    // center - right 是当前要合并的要数组
    const sorted = list.slice(0, left)
    const leftEnd = center - 1
    // 已排序数组的插入点，leftStart 之前的元素是已排序的
    let current = left
    // 元素个数
    const num = right - left + 1
    
    // 按序插入左数组和右数组的元素
    while(left <= leftEnd && center <= right) {
        if(list[left] <= list[center]) {
            sorted[current] = list[left]
            left ++
        } else {
            sorted[current] = list[center]
            center ++
        }
        current ++
    }
    
    // 插入左数组的剩余元素
    while(left <= leftEnd) {
        sorted[current] = list[left]
        current ++
        left ++
    }
    
    // 插入右数组的剩余元素
    while(center <= right) {
        sorted[current] = list[center]
        current ++
        center ++
    }
    
    // 将已经排序好的元素逆序复制到 list  [left right]
    // 为什么 sorted 的元素数等于 right
    // merge 之前， sorted 的元素个数是 left - 1, 新合并的元素个数是 right - left + 1
    // 所以合并后元素个数是 right
    for(let i = 0; i < num; i++, right--) {
        list[right] = sorted[right]
    }
}

const mergesortIter = (list, left, right) => {
    if(left < right) {
        let center = Math.floor((left + right) / 2)
        mergesortIter(list, left, center)
        mergesortIter(list, center + 1, right)
        merge(list, left, center + 1, right)
    } else {
        return
    }
}

const mergesort = list => {
    const len = list.length
    mergesortIter(list, 0, len - 1)
}

if(require.main === module) {
    const list = [38, 545, 6, 9, 324, 1, 4, 564, 17, 754]
    const l = [38, 545]
    mergesort(list)
    log('result', list)
}