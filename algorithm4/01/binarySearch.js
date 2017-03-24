// process 是全局

function binarySearch(val, arr) {
    let loc = 0;
    let hi = arr.length - 1;
    while (loc <= hi) {
        let mid = Math.floor(loc + (hi - loc) / 2);
        if (val < arr[mid]) {
            hi = mid - 1;
        } else if (val > arr[mid]) {
            loc = mid + 1
        } else {
            return mid
        }

    }
    return -1;
}


module.exports = binarySearch;

/*
 const val = 6;
 const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 const index = binarySearch(val, arr);
 console.log(index);
*/
