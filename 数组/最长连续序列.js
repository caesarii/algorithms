// 最长连续序列
/*
* [100, 1, 2, 200, 4, 3] 最长序列是[1, 2, 3, 4]
 * O(n)*/

// 方式 1：先排序 O(nlogn)
function longestConsecutive(arr) {

}

// 方式 2 ：分别计数每个元素的最长序列
function longestConsecutiveSeq(arr) {
    if(arr.length <= 1) {
        return arr;
    }

    var longest = 0;
    for(var index = 0; index < arr.length; index++) {
        // 当前 和 当前长度
        var curr = arr[index];
        var length = 1;

        // 寻找大于当前的连续值
        for(var next = curr + 1; arr.includes(next); next++) {
            delete arr[next];
            length ++;
        }
        // 寻找小于当前的连续值
        for(var prev = curr - 1; arr.includes(prev); prev--) {
            delete arr[prev];
            length ++;
        }
        // 当前最大长度
        longest = Math.max(longest, length)
    }
    return longest;
}

var arr1 = [1, 1, 2, 3, 3, 5, 5, 6, 7, 8, 9];
console.log(longestConsecutiveSeq(arr1));
console.log(arr1);
