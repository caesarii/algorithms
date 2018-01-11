// 1.1.13
function transpose(arr) {
    const result = []
    const m = arr.length
    const n = arr[0].length
    for(let row = 0; row < m; row++) {
        for(let col = row ; col < n; col++) {
            const ele = arr[row][col]
            const sibling = arr[col][row]
            console.log('pair', ele, sibling)
                arr[row][col] = sibling
                arr[col][row] = ele
        }
    }
    return arr
}

if(require.main === module) {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    const result = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ]
    console.log(transpose(arr))
}