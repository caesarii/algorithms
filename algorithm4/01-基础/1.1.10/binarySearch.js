const log = require('../../utils/log')
// arr 必须是有序的
function binarySearch(val, arr) {
    let head = 0;
    let tail = arr.length - 1;

    // 计数
    let count = 1;
    while (head <= tail) {
        log('次数', count++)
        let mid = Math.floor(head + (tail - head) / 2);
        if (val < arr[mid]) {
            tail = mid - 1;
        } else if (val > arr[mid]) {
            head = mid + 1
        } else {
            return mid
        }
    }
    return -1;
}


module.exports = binarySearch;

const testBinarySearch =() => {
     const val = 6;
     const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
     const index = binarySearch(val, arr);
     console.log(index);
}

if(require.main === module) {
   testBinarySearch()
}

