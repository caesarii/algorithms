
// 计算字符串形式的两个二进制数之和， 结果仍是二进制；

function addBinary(first, second) {
    var firstNum = parseInt(first, 2);
    var secondNum = parseInt(second, 2);
    var sum = firstNum + secondNum;
    return sum.toString(2);
}

var num1 = '1010';
// console.log(addBinary(num1, num1));

// Note: 其他进制（字符串）向十进制转换用parseInt, 十进制(数字)向其他进制转换用toString

function addBinaryV2(one, two) {
    var result = '';
    var lenOne = one.length - 1;
    var lenTwo = two.length - 1;

    var carry = 0;
    while(lenOne >= 0 || lenTwo >= 0 || carry >0) {
        var charOne = lenOne < 0 ? 0 : one[lenOne];
        var charTwo = lenTwo < 0 ? 0 : two[lenTwo];

        var sum = Number(charOne) + Number(charTwo) + carry;
        result = sum % 2 + result;
        carry = Math.floor(sum / 2);

        lenOne --;
        lenTwo --;
    }
    return result;
}

var num2 = '1010';
console.log(addBinaryV2(num2, num2));