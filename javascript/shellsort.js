const {log, exchange} = require('./utils')

const floor = Math.floor

const half = n => {
    return Math.floor(n / 2)
}

const shellsort = (list) => {
    
    const length = list.length
    
    // 遍历增量序列
    for(let increment = half(length); increment > 0; increment = half(increment)) {
        log('increment', increment)
        
        // 遍历数组: 对元素进行当前增量的排序
        for(let current = increment; current < length; current++) {
            log('i', current)
            
            // 对当前元素进行基于增量的插入排序
            for(let prev = current ; prev >= increment; prev -= increment) {
                
                if(list[prev] < list[prev - increment]) {
                    exchange(list, prev, prev - increment)
                }
            }
        }
        
    }
    
}

if(require.main === module) {
    const list = [38, 545, 6, 9, 324, 1, 4, 564, 17, 754]
    shellsort(list)
    log(list)
}