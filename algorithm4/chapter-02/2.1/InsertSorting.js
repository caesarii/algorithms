const exchange = (arr, indexA, indexB) => {
    const eleA = arr[indexA]
    arr[indexA] = arr[indexB]
    arr[indexB] = eleA
    return arr
}

const insertSorting = (arr) => {
    const len = arr.length

    // 外循环： 从第二个元素开始遍历
    for(let curr = 1; curr < len; curr++){

        // 内循环： 从当前元素往前遍历
        // 如果当前元素小于前面的元素，则交换两个元素
        // 交换次数等于逆序个数
        // 逆序： 一个逆序是指一个顺序颠倒的元素对
        // 逆序个数 <= 比较次数 <= 逆序个数 + len - 1
        for(let before = curr; before > 0; before --) {
            // 如果当前元素小于前面的元素，则交换两个元素
            // 冒泡
            if(arr[before] < arr[before - 1]) {
                arr = exchange(arr, before, before - 1)
            }
        }
    }
    return arr
}

console.log(insertSorting([38, 545, 6, 9, 324, 1, 4, 564,17, 754]))