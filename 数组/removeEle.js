
// 移除数组元素
/* 返回新的数组长度*/
function removeEle(arr, target) {
    var len = 0;
    for(var index = 0; index < arr.length; index++) {
        var curr = arr[index];
        if(curr !== target) {
            arr[len] = curr;
            len ++;
        }
    }
    // 要返回新数组，必须加这一句
    // arr.length = len;
    return len;
}

var arr1 = [1, 4, 2, 4, 3, 4, 5, 8];
console.log(removeEle(arr1, 4));
console.log(arr1);



// 方法 2
