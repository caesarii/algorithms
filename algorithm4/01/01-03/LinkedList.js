
const Node = require("./Node");
/*
* 链表类型
* 内部属性
* first: 头结点
* N： 元素数
*
* 方法
* isEmpty(): 是否为空
* size(): 元素数量
* toString： 所有元素组成的字符串*/
// first 是 {item: null, next: null} 在push是不考虑，迭代更简单，但是first 本身不能为空
class LinkedList {
    constructor() {
        this.first = new Node(null);
        this.N = 0;
    }
    isEmpty() {
        return this.N === 0;
    }
    size() {
        return this.N;
    }
    toString() {
        let result = "";
        for(let curr = this.first; curr.next !== null; curr = curr.next) {
            result = curr.item + " " + result;
        }
        console.log(result);
    }
    iterator(callback) {
        let curr;
        for(let index = 0; index < this.N; index ++) {
            if(index === 0) {
                curr = this.first;
            } else {
                curr = curr.next;
            }
            callback(curr.item, index);
        }
    }
}

module.exports = LinkedList;