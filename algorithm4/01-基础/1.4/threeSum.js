
const fs = require("fs");
const readLineSync = require('../../utils/readLine');
const binarySearch = require('../1.1.10/binarySearch');

// 统计文件中 和为0 的 三整数数组的数量
// 暴力解法
function threeSum(arr) {
    const len = arr.length;
    let count = 0;
    for(let first = 0; first < len; first ++) {
        for(let second = first + 1; second < len; second ++) {
            for(let third = second + 1; third < len; third ++) {
                if( arr[first] + arr[second] + arr[third] === 0) {
                    count ++;
                }
            }
        }
    }
    return count;
}

/*
// 下面这种计时方法是不行的，因为 resolve 仍然是异步
const t1 = new Date();
const read1Mints = readLineSync("./dataFiles/1Mints.txt");
read1Mints.then(arr => {
    console.log(threeSum(arr));
}, err => console.log(err));

const t2 = new Date();
console.log("read 1Mints", t2 - t1);

const read2Mints = readLineSync("./dataFiles/2Kints.txt");
read2Mints.then(arr => {
    console.log(threeSum(arr));
}, err => console.log(err));

const t3 = new Date();
console.log("read 2Kints", t3 - t2);


const read4Mints = readLineSync("./dataFiles/4Kints.txt");
read4Mints.then(arr => {
    console.log(threeSum(arr));
}, err => console.log(err));

const t4 = new Date();
console.log("read 4Kints", t4 - t3);*/


// 快速解法
function threeSumQuickly(arr) {
    arr.sortStatic();
    const len = arr.length;
    for(let first = 0; first < len; first ++ ) {
        for(let second = first; second < len;)
    }
}
