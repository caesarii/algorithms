// move zeros
// 将指定元素移到元素末尾
/* 先按照removeEle移除指定元素，再在指定位置插入元素*/

function moveEle(arr, target) {
    var len = 0;
    for(var index = 0; index < arr.length; index++) {
        var curr = arr[index];
        if(curr !== target) {
            arr[len] = curr;
            len ++;
        }
    }
    var oldLen = arr.length;
    arr.length = len;
    while(arr.length < oldLen) {
        arr.push(target)
    }
    return arr;
}

var arr1 = [1, 4, 2, 4, 3, 4, 5, 8];
console.log(moveEle(arr1, 4));
