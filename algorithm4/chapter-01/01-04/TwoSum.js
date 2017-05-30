
const readLineSync = require('../../utils/readLine');
const binarySearch = require("../01-01-10/binarySearch");

function twoSum(arr) {
    // 排序
    arr.sort();
    const len = arr.length;
    let num = 0;
    for(let index = 0; index < len; index ++) {
        // -arr[index] 存在于数组中，而且位于arr[index] 后面，也就存在一个 zero-sum
        if(binarySearch(-arr[index], arr) > index) {
            num ++;
        }
    }
    return num;
}

const read1Mints = readLineSync("./dataFiles/2Kints.txt");

read1Mints.then(arr => {
    console.log(twoSum(arr));
});

