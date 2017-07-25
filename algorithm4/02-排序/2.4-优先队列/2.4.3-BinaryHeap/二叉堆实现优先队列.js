const exchange = (arr, indexA, indexB) => {
    const eleA = arr[indexA]
    arr[indexA] = arr[indexB]
    arr[indexB] = eleA
    return arr
}

const less = (eleA, eleB) => {
    return eleA < eleB
}


// 二叉堆中有 len -1 个元素， 第一个元素留空
/*
* 二叉堆不是完全有序的，
* 1. 根节点始终是最大值
* 2. 子节点小于父节点
* */

/* 在堆的最后插入元素时， 需要通过自下而上的上浮回复顺序
*  删除对的根节点，并替换为一个子节点时，需要通过自上而下的下沉回复顺序*/

/* 子节点 i 的父节点是 parseInt(i / 2)
*  父节点 i 的子节点是 2 * i 或者 2 * i + 1 */

class BinaryHeap {
    constructor() {
        this.data = [NaN]
    }

    insert(ele) {
        // 在数组最后插入元素
        this.data.push(ele)

        // 对最后一个元素进行上浮
        this.swim(this.data.length - 1)
    }

    deleteMax() {
        const data = this.data
        const len = data.length

        // 根节点
        const max = data[1]

        // 交换根节点与最后一个节点
        exchange(data, 1, len - 1)
        // 删除最后一个节点
        data.splice(len-1, 1)

        // 对根节点进行下沉
        this.sink(1)
        return max
    }

    swim(index) {
        const data = this.data

        while (index > 1) {
            // 父节点
            const parent = Math.floor(index / 2)

            // 父节点小于子节点
            if(less(data[parent], data[index])) {
                exchange(data, parent, index)
            }

            // 继续上浮
            index = Math.floor(index / 2)
        }
    }

    sink(root) {
        const data = this.data
        const len = data.length

        while (2 * root <= len) {
            // 子级节点
            let child = 2 * root

            // 子节点中的较大者
            if(less(data[child], data[child + 1])) {
                child = child + 1
            }

            // 父节点小于子节点
            if(less(data[root], data[child])) {
                exchange(data, root, child)
            } else {
                return
            }
            root = child
        }
    }

    toString() {
        console.log(this.data.toString())
    }
}

const bh = new BinaryHeap()
bh.insert(3)
bh.insert(5)
bh.insert(20)
bh.insert(6)
bh.insert(7)
bh.insert(8)
bh.insert(1)
bh.insert(9)
bh.insert(15)
// bh.deleteMax()
bh.deleteMax()
bh.toString()
