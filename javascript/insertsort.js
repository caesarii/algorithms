const {log, exchange} = require('./utils')

const insertsort = (A) => {
    // 从第二个元素开始遍历数组
    for(let j = 1; j < A.length; j++){
        const key = A[j]
        // 从当前元素往前遍历
        let i = j - 1;
        // 如果比较元素大于当前元素，则将比较元素后移
        while(i > -1 && A[i] > key) {
            A[i + 1] = A[i]
            i = i - 1
        }
        // 如果比较元素小于当前元素, 则插入当前元素
        A[i + 1] = key;
        log('sorted A', A.slice(0, j + 1))
    }
}


if(require.main === module) {
    const list = [38, 545, 6, 9, 324, 1, 4, 564,17, 754]
    insertsort(list)
    log(list)
}

module.exports = insertsort