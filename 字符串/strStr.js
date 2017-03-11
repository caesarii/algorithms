// 在字符串中检索子串， 返回子串的索引
// 即str.index(subStr);

/* 分析
* 不需要对整个字符串进行遍历，只遍历差
* 每个字符与subStr 进行匹配 */

function strStr(superStr, subStr) {
    var superLen = superStr.length;
    var subLen = subStr.length;
    var diff = superLen - subLen + 1;
    for (var index = 0; index < diff; index++) {
        var superIndex = index;
        var subIndex = 0;
        while (superIndex < superLen &&
        subIndex < subLen &&
        superStr[superIndex] === subStr[subIndex]
            ) {
            superIndex ++;
            subIndex ++
        }
        if(subIndex === subLen) {
            return index;
        }
    }
    return -1;
}

var str1 = "0123abc";
var str2 = "abc";
console.log(strStr(str1, str2));