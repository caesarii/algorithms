const log = (() => {
    return console.log.bind(console)
})()


const exchange = (arr, indexA, indexB) => {
    const eleA = arr[indexA]
    arr[indexA] = arr[indexB]
    arr[indexB] = eleA
    return arr
}

const less = (eleA, eleB) => {
    return eleA < eleB
}
module.exports = {log, exchange}

