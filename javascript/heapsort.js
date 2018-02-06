const {log, exchange} = require('./utils')

const perdown = (list, i, length) => {
    let temp
    let child
    for(temp = list[i]; i * 2 + 1 < length; i = child) {
        child = i * 2 + 1
        if(child != length -1 && list[child + 1] > list[child]) {
            child ++
        }
        if(temp < list[child]) {
            list[i] = list[child]
        } else {
            break
        }
    }
    list[i] = temp
    return list
}

const heapsort = list => {
    const length = list.length
    for(let i = length / 2; i >= 0; i--) {
        perdown(list, i , length)
    }
    
    for(let i = length - 1; i > 0; i--) {
        exchange(list, 0, i)
        perdown(list, 0, i)
    }
    
    return list
}

if(require.main === module) {
    const list = [38, 545, 6, 9, 324, 1, 4, 564,17, 754]
    const sorted = heapsort(list)
    console.log(sorted)
}