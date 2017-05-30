// 03
function isEqual() {
    const num1 = process.argv[2];
    const num2 = process.argv[3];
    const num3 = process.argv[4];
    if (num1 === num2 && num2 === num3) {
        console.log("equal");
    } else {
        console.log("unequal");
    }

}

isEqual();

// 09 正整数转换为二进制
function toBinary(val) {
    let binary = "";
    for (let num = val; num > 0; num = Math.floor(num / 2)) {
        binary = num % 2 + binary;
    }
    return binary;
}

console.log(toBinary(2));

// JS 标准库
console.log("2".toString(2));

// 11
// 打印二维数组

function printDbArray(dbArr) {
    let result = "";
    dbArr.forEach((arr, row) => {
        arr.forEach((ele, col) => {
            result += `${ele}  `;
        });
        result += "\n";
    });
    console.log(result);
}
const dbArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
printDbArray(dbArray);

function transposeArray(dbArr) {
    let result = "";
    for(let row = 0; row < dbArr.length; row++) {
        for(let col = 0; col < dbArr[row].length; col++) {
            // 先列后行
            result += dbArr[col][row] + "  ";
        }
        result += "\n";
    }
    console.log(result)
}

transposeArray(dbArray);