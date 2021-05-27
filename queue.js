"use strict";
exports.__esModule = true;
var linked_list_1 = require("./linked-list");
var Queue = /** @class */ (function () {
    function Queue() {
    }
    Queue.prototype.add = function (data) {
        var newNode = new linked_list_1.ListNode(data);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.head.nextNode = null;
            this.tail = null;
        }
        else if (this.head && !this.tail) {
            this.tail = newNode;
            this.head.nextNode = this.tail;
        }
        else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
            this.tail.nextNode = null;
        }
    };
    Queue.prototype.print = function () {
        var _a;
        if (!this.head && !this.tail) {
            console.log('this queue is empty');
        }
        else if (this.head && !this.tail) {
            console.log('Queue:', this.head.data.toString());
        }
        else {
            var queueString = '';
            var currentNode = this.head;
            // console.log('currentNode:', currentNode);
            while (currentNode.nextNode) {
                queueString = ((_a = currentNode) === null || _a === void 0 ? void 0 : _a.data.toString()) + " " + queueString;
                currentNode = currentNode.nextNode;
            }
            console.log('Queue (from right to left):', queueString);
        }
    };
    return Queue;
}());
var myQueue = new Queue();
myQueue.print();
myQueue.add(8);
myQueue.print();
myQueue.add(6);
myQueue.add(5);
myQueue.add(4);
myQueue.print();
