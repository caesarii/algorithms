
// 将数组中的重复元素汇聚到一起
// 失败 应该直接用 sort
function convergeDuplicate(arr) {
    if(arr.length <= 2) {
        return arr;
    }
    for(var index = 2; index < arr.length; index++) {
        var curr = arr[index];
        var prevIndex = arr.indexOf(curr);
        if(prevIndex < index) {
            arr.slice(0, index).splice(prevIndex, 0, curr)
        }
    }
    return arr;
}

var arr1 = [1, 2, 3, 1, 2, 3, 1, 2, 3];
console.log(convergeDuplicate(arr1));