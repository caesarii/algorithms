
const exchange = (arr, indexA, indexB) => {
    const eleA = arr[indexA]
    arr[indexA] = arr[indexB]
    arr[indexB] = eleA
    return arr
}

const selectSorting = (arr) => {
    const len = arr.length

    // 外循环： 对所有元素进行遍历，交换当前元素与排在后面的最小的元素
    // 总交换次数： N
    for(let curr = 0; curr < len; curr++){
        // 当前最小的元素的索引，默认是第一个元素
        let min = curr;

        // 内循环： 寻找排在当前元素后面的最小的元素
        // 总比较次数： N-1 + N-2 + N-3 + ... + 2 + 1 = N(N-1)/2
        for(let after = curr + 1; after < len; after ++) {
            // 如果待比较元素小于当前最小元素，则记录该元素的索引
            if(arr[after] < arr[min]) {
                min = after
            }
        }
        // 无论比较结果如何，都交换当前元素与最小元素
        // min 可能是比 index 更小的元素，也可能是 index 本身
        arr = exchange(arr, curr, min)
    }
    return arr
}

console.log(selectSorting([32, 545, 6, 9, 324, 1, 4, 564,17, 754]))
