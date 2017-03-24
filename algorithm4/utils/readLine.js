const fs = require('fs');
/*
 * path: 文件路径

 * return array*/
function readLineSync(path) {
    return new Promise((resolve, reject) => {
        const input = fs.createReadStream(path);
        input.setEncoding("utf8");
        let remaining = '';
        const arr = [];
        input.on("data", data => {
            remaining += data;
            let start = remaining.indexOf('\n');

            while (start > -1) {
                let line = remaining.substring(0, start);
                remaining = remaining.substring(start + 1);
                arr.push(parseInt(line));
                start = remaining.indexOf('\n');
            }
        });

        input.on('end', () => {
            if (arr.length > 0) {
                resolve(arr)
            } else {
                reject("读取失败")
            }

        });
    })
}

module.exports = readLineSync;