
// 2 sum
/*
* 返回数组中和为指定值的两个元素的坐标 */

function twoSum(arr, target) {
    var temp = [];
    for(var index = 0; index < arr.length; index++) {
        var curr = arr[index];
        if(curr in temp) {
            return [index, temp[curr]]
        } else {
            // 下标是当前值的补值，值是当前值的索引
            // 如果遍历到该补值，就返回保存的索引，以及补值的索引(if中的逻辑)
            temp[target - curr] = index;
        }
    }
}

var arr1 = [2, 7, 9, 2, 4];
console.log(twoSum(arr1, 6));


// 返回和为指定值的两个元素: 只在temp中保存 value, 而不是 index
function twoSumV2(arr, target) {
    var temp = [];
    for(var index = 0; index < arr.length; index++) {
        var curr = arr[index];
        if(curr in temp) {
            return [curr, temp[curr]]
        } else {
            temp[target - curr] = curr;
        }
    }
}

console.log(twoSumV2(arr1, 16));
