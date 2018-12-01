
const {log, exchange} = require('./utils')

const slice = (A, start, end) => {
    return A.slice(start, end + 1)
}

const merge = (A, p, q, r) => {
    // log('merge', A, p, q, r)
    log('merge A', slice(A, p, r))
    let L = slice(A, p, q)
    let R = slice(A, q + 1, r)
    L.push(Infinity)
    R.push(Infinity)
    log('merge left', L)
    log('merge right', R)

    let i = 0
    let j = 0
    let k = p
    while(k <= r) {
        if(L[i] <= R[j]) {
            A[k] = L[i]
            i += 1
            log('insert left', slice(A, p, r))
        } else {
            A[k] = R[j]
            j += 1
            log('insrt right', slice(A, p, r))
        }
        k += 1
    }
    log('merged A', slice(A, p, r))
    log()
}

const mergesort = (A, p = 0, r = A.length - 1, type) => {
    log()
    log('sort', slice(A, p, r), type, p, r)
    if (p < r) {
        const q = Math.floor((p + r) / 2)
        log('sort left', slice(A, p, q))
        log('sort right', slice(A, q + 1, r))
        mergesort(A, p, q, `left`)
        mergesort(A, q + 1, r, `right`)
        merge(A, p, q, r);
    }
}

if(require.main === module) {
    // const list = [38, 545, 6, 9, 324, 1, 4, 564, 17, 754]
    const list = [5, 2, 4 , 7]
    // const list = [38, 545, 6]
    mergesort(list)
    log('result', list)
}