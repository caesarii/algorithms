
// 将字符冲突转换为整数
/*
* 忽略字符中的空格
* 第一个有效数字可以正负号
* 数字之后的非数字被忽略*/

// parseInt ?

function atoi(str) {
    var num = '';
    var sign = 1;
    // 去掉头尾的空格
    str = str.trim();

    // 第一个字符是 正负号
    var first = str[0];
    if(first === "+") {
        str = str.slice(1);
    } else if(first === "-") {
        str = str.slice(1);
        sign = -1;
    }

    var len = str.length;
    if(len === 0) {
        return 0;
    }
    for(var index = 0; index < len; index++) {
        var curr = str.charAt(index);
        if(curr < '0' || curr > '9') {
            break;
        }
        num = num + curr;
    }

    return Number(num) * sign;
}

var str = "-123a123bc";
console.log(atoi(str));