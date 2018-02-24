// 理解递归的执行顺序

// 单个递归
const iter = (n, mode) => {
    if(n >= 10) {
        console.log(`${mode}end`, n)
        return
    }
    console.log(mode, n)
    iter(n + 1, `${mode} left`)
}

// 两个递归
const iterDoubly = (left, right, mode) => {
    const n = 5
    if(left >= right) {
        console.log(`${mode}/`, left, right)
        return
    }
    console.log(mode, left, right)
    iterDoubly(++left, n , `${mode} left`)
    iterDoubly(n, --right, `${mode} right`)
}

if(require.main === module) {
    // iter(5, 'first')
    iterDoubly(0, 9, 'first')
}


`
up->down                                   down -> up                             up -> down
first 0 9
first left 1 5                             first right 5 8                        first right left/ 6 5         first right right left/ 6 5        first right right right left/ 6 5
first left left 2 5                        first left right/ 5 4                  first right right 5 7         first right right right 5 6        first right right right right/ 5 5                                  first right right right 5 6
first left left left 3 5                   first left left right/ 5 4
first left left left left 4 5              first left left left right/ 5 4
first left left left left left/ 5 5        first left left left left right/ 5 4



`

