const {log, exchange} = require('./utils')

const selection = (A) => {
    // 遍历数组
    for(let j = 0; j < A.length; j++){
        // k: 已排序元素中的最大值
        let k = j;
        // 从当前元素往后遍历
        let i = j + 1
        // 如果比较元素小于当前元素，则记录
        while(i < A.length) {
            if (A[i] < A[k]) {
                k = i;
            }
            i = i + 1
        }
        const min = A[k]
        A[k] = A[j]
        A[j] = min
        log('sorted A', A.slice(0, j + 1))
    }
}


if(require.main === module) {
    const list = [38, 545, 6, 9, 324, 1, 4, 564,17, 754]
    selection(list)
    log(list)
}

module.exports = selection