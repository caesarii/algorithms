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
    let i = low
    let j = high + 1
    const delimiter = arr[low]
    while(true) {
        while(less(arr[++i], delimiter)) {
            if(i === high) {
                break
            }
        }
        while(less(delimiter, arr[--j])) {
            if(j === low) {
                break
            }
        }
        if(i >= j) {
            break
        }
        exchange(arr, i, j)
        return j
    }
}

const quickSorting = (arr, low, high) => {
    if(high <= low) {
        return
    }
    const delimiter = partition(arr, low, high)
    quickSorting(arr, low, delimiter - 1)
    quickSorting(arr, delimiter + 1 , high)
}

const arr1 = [ 3,  2, 1, 4]
const arr2 = [32, 545, 6, 9, 324, 1, 4, 564, 17, 754]
const arr3 = [1, 4, 2, 5, 6, 7, 9, 10, 3, 8]


console.log(quickSorting(arr1))