const log = require('../../utils/log')

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    // 按关键字搜索节点
    search(key) {
        const node = this.head
        for(let node = this.head; node !== null; node = node.next) {
            if(node.key === key) {
                return node
            }
        }
    }

    insert(key) {
        const node = new Node(key)

        // 后继
        node.next = this.head
        if(this.head !== null) {
            // 后继的引用
            this.head.prev = node
        }

        // head 重定向
        this.head = node
    }


    delByKey(key) {
        const node = this.search(key)

        if(node.prev === null) {
            // node 是头结点
            this.head = node.next
        } else {
            // node不是头结点，删除前继的引用
            node.prev.next = node.next
        }

        if(node.next !== null) {
            // node不是尾节点，删除后继的引用
            node.next.prev = node.prev
        }

    }
}


class Node {
    constructor(key) {
        this.key = key
        this.next = null
        this.prev = null
    }
}

const testLinkedList = () => {
    const list = new LinkedList()
    list.insert('qinghe')
    list.insert('18')
    list.insert('enginner')
    log('list', list.head)

    list.delByKey('qinghe')
    list.delByKey('18')
    log('list', list.head)

}

if(require.main === module) {
    testLinkedList()
}
