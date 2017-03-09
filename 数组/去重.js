// 数组去重


/* 要求
* 在原数组上去重
* 返回新length*/

// 方法 1
function removeDuplicates(arr) {
    if(arr.length === 0) {
        return 0
    }
    // 0 号元素不会重复， 从 1 号开始
    // noRepeat 表示该元素之前，没有重复， 所以每次只需要比较 noRepeat -1
    var noRepeat = 1;
    for(var i = 1; i < arr.length; i++) {
        // 当前不是重复, 插入到 noRepeat, 然后 noRepeat + 1
        // 如果当前是重复，则遍历下一元素，当前实际会被覆盖
        if(arr[i] !== arr[noRepeat - 1 ]) {
            arr[noRepeat] = arr[i];
            noRepeat ++;
        }
        console.log(i, arr);
    }
    // 截取没有重复的部分
    arr.length = noRepeat;
    return noRepeat;
}

var arr = [1, 1, 2, 2, 3, 3, 4, 4];
console.log("数组长度", removeDuplicates(arr));
console.log("去重后的数组", arr);

// 方法 2
// 该方法创建了新数组
function removeDuplicateBySet(arr) {
    return [...new Set(arr)].length;
}

var arr2 = [1, 2, 3, 3, 3, 2, 1];
console.log(removeDuplicateBySet(arr2));
console.log("去重后的数组", arr2);


// 变式： 允许 指定次数 的重复： 以两次为例
// 该方法的前提是数组已经排序，也就是重复元素是相邻的；否则引入hashmap
// 如何使数组中重复的元素相邻
function removeDuplicatesII(arr) {
    if(arr.length <= 2) {
        return arr.length;
    }

    // 表示允许重复的次数
    var occur = 2;
    var noRepeat = occur;
    for(var i = occur; i < arr.length; i++) {
        if(arr[i] !== arr[noRepeat - occur ]) {
            arr[noRepeat] = arr[i];
            noRepeat ++;
        }
        console.log(i, arr);
    }
    arr.length = noRepeat;
    return noRepeat;
}

var arr3 = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4];
console.log("数组长度", removeDuplicatesII(arr3));
console.log("去重后的数组", arr3);