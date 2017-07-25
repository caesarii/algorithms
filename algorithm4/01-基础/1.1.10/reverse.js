
// 对数组进行逆序
function reverse(arr) {
    const len = arr.length;
    let curr;
    for(let index = 0; index < len / 2; index ++) {
        curr = arr[index];
        arr[index] = arr[len - 1 - index];
        arr[len - 1 - index] = curr;
    }
    return arr;
}

const arr = [1, 2, 3];
console.log(reverse(arr));