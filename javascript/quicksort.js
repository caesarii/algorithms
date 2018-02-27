const {log, exchange} = require('./utils')

// 三数中值排序法
const median = (list, left, right) => {
    // 对 left， center, right进行排序
    const center = Math.floor((left + right) /2 2)
    log('median', list[left], list[center], list[right])
    const l = list[left]
    const r = list[right]
    const c = list[center]
    if(l > c) {
        exchange(list, left, center)
    }
    if(l > r) {
        exchange(list, left, right)
    }
    if(c > r) {
        exchange(list, center, right)
    }
    
    return list[center]
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
    // 将枢纽元放置在 right - 1
    const center = Math.floor((left + right) / 2)
    exchange(list, center, right - 1)
    log('pivot', pivot)
    
    // 划分集合
    let i = left + 1 // left 一定小于 pivot
    let j = right - 2 // right 一定大于 pivot, right - 1 放置 pivot
    while(true)  {
        // i 指向大于 pivot 的元素
        while(list[i] < pivot) {
            i += 1
        }
        // j 指向小于 pivot 的元素
        while(list[j] > pivot) {
            j -= 1
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
    // 递归
    quicksortIter(list, left, i - 1, `${mode} left`)
    quicksortIter(list, i + 1, right, `${mode} right`)
}

const quicksort = list => {
    const len = list.length
    quicksortIter(list, 0, len - 1, 'first')
    
}


if(require.main === module) {
    const list = [38, 545, 6, 9, 324, 1, 4, 564, 17, 754]
    quicksort(list)
    log(list)
}