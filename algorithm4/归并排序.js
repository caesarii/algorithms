


const merge = (left, right) => {
    // 归并就是按大小从左或右数组中取出元素，填入数组
    const mergedArr = []
    while(left.length > 0 && right.length > 0) {
        if(left[0] <= right[0]) {
            // 左数组小取左数组
            mergedArr.push(left.shift())
        } else {
            // 右数组小取右数组
            mergedArr.push(right.shift())
        }
    }
    while(left.length > 0) {
        mergedArr.push(left.shift())
    }
    while(right.length > 0) {
        mergedArr.push(right.shift())
    }

    console.log('merge', mergedArr)
    return mergedArr
}

const mergeSorting = (arr) => {
    if(arr.length < 2) {
        return arr
    }

    const middle = parseInt(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    const sortedLeft = mergeSorting(left)
    const sortedRight = mergeSorting(right)
    const sortedArr = merge(sortedLeft, sortedRight)
    return sortedArr
}
const arr1 = [ 3,  2, 1, 4]
const arr2 = [32, 545, 6, 9, 324, 1, 4, 564, 17, 754]
const arr3 = [1, 4, 2, 5, 6, 7, 9, 10, 3, 8]


console.log(mergeSorting(arr3))


