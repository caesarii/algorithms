const log = (() => {
    return console.log.bind(console)
})()

class LinkedList {
    constructor() {
        this.head = null
    }

    insert(key) {
        const node = new Node(key)
        node.next = this.head
        this.head = node
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
}

if(require.main === module) {
    testLinkedList()
}