const log = (() => {
    return console.log.bind(console)
})()

class LinkedList {
    constructor() {
        this.head = null
    }

    indexOf(key) {
        let index = 0
        for(let node = this.head; node !== null; node = node.next) {
            index ++
            if(key === node.key) {
                return index
            }
        }
    }

    searchByIndex(index) {
        let counter = 0
        for(let node = this.head; node !== null; node = node.next) {
            counter++
            if(index === counter) {
                return node
            }
        }
    }

    insert(key) {
        const node = new Node(key)
        node.next = this.head
        this.head = node
    }

    delByKey(key) {
        if(key === this.head.key) {
            this.head = this.head.next
            return
        }

        // 当前节点
        const index = this.indexOf(key)
        const curr = this.searchByIndex(index)
        const prev = this.searchByIndex(index - 1)
        prev.next = curr.next
        return curr
    }


}

class Node {
    constructor(key) {
        this.key = key
        this.next = null
    }
}

const testLinkedList = () => {
    const list = new LinkedList()
    list.insert('qinghe')
    list.insert('15')
    log(list.head)

    list.delByKey('15')
    log(list.head)
}

if(require.main === module) {
    testLinkedList()
}