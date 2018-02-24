const {log, exchange} = require('./utils')
const insertsort = require('./insertsort')

// 三数中值排序法
const median = (list, left, right) => {
    // 对 left， center, right进行排序
    const center = Math.floor((left + right) / 2)
    log('median', list[left], list[center], list[right])
    if(list[left] > list[center]) {
        exchange(list, left, center)
    }
    if(list[left] > list[right]) {
        exchange(list, left, right)
    }
    if(list[center] > list[right]) {
        exchange(list, center, right)
    }
    
    // 将枢纽元放置在
    exchange(list, center, right - 1)
    // log('median', list)
    return list[right - 1]
}

const quicksortIter = (list, left, right, mode) => {
    log('list', list)
    log('left', left, 'right', right)
    
    if(right - left <= 1) {
        log(`${mode}end \n`)
        if(list[left] > list[right]) {
            exchange(list, left, right)
        }
        return
    }
    // 枢纽元
    
    const pivot = median(list, left, right)
    log('pivot', pivot)
    
    let i = left // left 一定小于 pivot
    let j = right - 1 // right 一定大于 pivot, right - 1 放置 pivot
    while(true) {
        // i 指向大于 pivot 的元素
        
        while(list[++i] < pivot) {
        
        }
        // j 指向小于 pivot 的元素
        
        while(list[--j] > pivot) {
        
        }
        
        // 交换元素
        if(i < j) {
            exchange(list, i, j)
        } else {
            break
        }
    }
    // 复原 pivot
    exchange(list, i, right - 1)
    log('new list', list)
    log(mode, '\n')
    quicksortIter(list, left, i - 1, `${mode} left`)
    quicksortIter(list, i + 1, right, `${mode} right`)
}

const quicksort = list => {
    const len = list.length
    quicksortIter(list, 0, len - 1, 'first')
    return list
}


if(require.main === module) {
    const list = [38, 545, 6, 9, 324, 1, 4, 564, 17, 754]
    const sorted = quicksort(list)
    console.log(sorted)
}