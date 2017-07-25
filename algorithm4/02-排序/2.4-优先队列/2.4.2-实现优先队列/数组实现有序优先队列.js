
const exchange = (arr, indexA, indexB) => {
    const eleA = arr[indexA]
    arr[indexA] = arr[indexB]
    arr[indexB] = eleA
    return arr
}

const less = (eleA, eleB) => {
    return eleA < eleB
}


class PriorityQueue {
    constructor() {
        // 数组实现
        this.data = []
    }
    insert(ele) {
        // 有序
        let data = this.data
        data.push(ele)

        let index = data.length - 1;
        while(index > 0) {
            const curr = index
            const prev = index - 1
            if(less(data[curr], data[prev])) {
                exchange(data, index, prev)
            }
            index --
        }
    }
    deleteMax() {
        const data = this.data
        let maxIndex = 0
        data.forEach(function(ele, index) {
            if(ele >= data[maxIndex]) {
                maxIndex = index
            }
        })
        return data.splice(maxIndex, 1)
    }
    toString() {
        console.log(this.data.toString())
    }
}

const priorityQueue = new PriorityQueue()
priorityQueue.insert(3)
priorityQueue.insert(2)
priorityQueue.insert(0)
priorityQueue.insert(1)

// console.log(priorityQueue.deleteMax())
priorityQueue.toString()