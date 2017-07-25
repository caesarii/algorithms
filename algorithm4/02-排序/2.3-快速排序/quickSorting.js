const exchange = (arr, indexA, indexB) => {
    const eleA = arr[indexA]
    arr[indexA] = arr[indexB]
    arr[indexB] = eleA
    return arr
}

const less = (eleA, eleB) => {
    return eleA < eleB
}

const partition = (arr, low, high) => {

    // 以 low 作为 delimiter
    const delimiter = arr[low]
    // 左侧从第二个元素开始，右侧从最后一个元素开始
    let left = low + 1
    let right = high

    while(true) {
        // 找到左侧大于 delimiter  的元素
        while(left < high) {
            if(less(delimiter, arr[left])) {
                break
            }
            left++
        }

        // 找到右侧小于 delimiter 的元素
        while(right > low) {
            if(less(arr[right], delimiter)) {
                break
            }
            right--
        }


        if(left < right) {
            exchange(arr, left, right)
        } else {
            break
        }
    }

    exchange(arr, low, right)
    return right
}

const quickSorting = (arr, low = 0, high = arr.length - 1) => {
    if(high <= low) {
        return
    }
    const delimiter = partition(arr, low, high)

    quickSorting(arr, low, delimiter - 1)
    quickSorting(arr, delimiter + 1, high)
}

const arr1 = [3, 2, 1, 4]
const arr = [32, 545, 6, 9, 324, 1, 4, 564, 17, 754]
const arr3 = [1, 4, 2, 5, 6, 7, 9, 10, 3, 8]

const testSorting = (arr) => {
    quickSorting(arr)

    const sorted = arr.every((ele, index) => {
        let result = false
        if(index === 0) {
            result = true
        } else {
            result = arr[index - 1] <= ele
        }
        return result
    })
    return sorted
}

console.log('arr sorted: ', testSorting(arr), arr)
