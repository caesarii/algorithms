const log = (() => {
    return console.log.bind(console)
})()

class Node {
    constructor(key) {
        this.key = key
        this.parent = null
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }
    insert(key) {
        const node = new Node(key)

        // 插入根节点
        if(this.root === null) {
            this.root = node
            return
        }

        // 找到新节点的父节点
        let parent = null
        let curr = this.root

        while(curr !== null) {
            parent = curr
            if (node.key < curr.key) {
                curr = curr.left
            } else {
                curr = curr.right
            }
        }
        node.parent = parent

        // 插入节点
        if(node.key < parent.key) {
            parent.left = node
        } else {
            parent.right = node
        }

    }

    del() {

    }

    search(key, current = this.root) {
        // 根节点
        if(current === null || key === current.key) {
            return current
        }

        //
        if(key < current.key) {
            return this.search(key, current.left)
        } else {
            return this.search(key, current.right)
        }
    }

    iterativeSearch(key) {
        let current = this.root
        while(current !== null) {
            if(key === current.key) {
                return current
            } else if(key < current.key) {
                current = current.left
            } else {
                current = current.right
            }
        }
    }

    minimum(curr = this.root) {
        while(curr.left !== null) {
            curr = curr.left
        }
        return curr
    }

    maximum(curr = this.root) {
        while(curr.right !== null) {
            curr = curr.right
        }
        return curr
    }

    successor(key) {
        let node = new Node(key)
        if(node.right !== null) {
            return this.minimum(node.right)
        }
        let y = node.parent
        while(y !== null && node === y.right) {
            node = y
            y = y.parent
        }
        return y
    }

    predecessor(key) {

    }

}

const testTree = () => {
    const tree = new BinaryTree()
    tree.insert(15)
    tree.insert(6)
    tree.insert(3)
    tree.insert(2)
    tree.insert(4)
    tree.insert(7)
    tree.insert(13)
    tree.insert(9)
    tree.insert(18)
    tree.insert(17)
    tree.insert(20)
    log(tree.root)

    log('search', tree.iterativeSearch(5))

    log('minimum', tree.minimum())

    log('maxmum', tree.maximum())

    log('successor', tree.successor(17))
}

if(require.main === module) {
    testTree()
}