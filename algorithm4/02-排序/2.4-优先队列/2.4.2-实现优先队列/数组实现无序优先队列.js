
class PriorityQueue {
    constructor() {
        // 数组实现
        this.data = []
    }
    insert(ele) {
        // 无序
        this.data.push(ele)
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
priorityQueue.insert(2)
priorityQueue.insert(3)
priorityQueue.insert(0)
priorityQueue.insert(1)

console.log(priorityQueue.deleteMax())
priorityQueue.toString()