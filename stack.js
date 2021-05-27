"use strict";
exports.__esModule = true;
var linked_list_1 = require("./linked-list");
var Stack = /** @class */ (function () {
    function Stack() {
    }
    Stack.prototype.add = function (data) {
        var newNode = new linked_list_1.ListNode(data);
        if (!this.head) {
            this.head = newNode;
            this.head.nextNode = null;
        }
        else {
            var newNextNode = this.head;
            this.head = newNode;
            this.head.nextNode = newNextNode;
        }
    };
    Stack.prototype.print = function () {
        if (!this.head) {
            console.log('this stack is empty');
        }
        else {
            var stackString = '';
            var currentNode = this.head;
            while (currentNode.nextNode) {
                stackString += currentNode.data.toString();
                currentNode = currentNode.nextNode;
            }
            stackString += currentNode.data.toString();
            console.log("Stack: " + stackString);
        }
    };
    return Stack;
}());
var myStack = new Stack();
// myStack.print();
myStack.add(8);
// myStack.print();
myStack.add(6);
myStack.add(5);
// myStack.add(4);
myStack.print();
