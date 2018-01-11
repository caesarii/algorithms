// 1.1.10
// arr 必须是有序的
function binarySearch(key, a) {
    let lo = 0;
    let hi = a.length - 1;
    while (lo <= hi) {
        let mid = Math.floor((hi + lo) / 2);
        // break
        if (key < a[mid]) {
            hi = mid - 1;
        } else if (key > a[mid]) {
            lo = mid + 1
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

