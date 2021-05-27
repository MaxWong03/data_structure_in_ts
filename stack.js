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
    Stack.prototype.pop = function () {
        if (!this.head) {
            console.log('stack is empty, nothing to delete');
        }
        else {
            var newHead = this.head.nextNode;
            this.head = newHead;
        }
    };
    Stack.prototype.peek = function () {
        console.log(this.head.data + " is at the top of the stack");
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
            console.log("Stack (from left to right): " + stackString);
        }
    };
    return Stack;
}());
var myStack = new Stack();
myStack.print();
myStack.add(8);
myStack.print();
myStack.add(6);
myStack.add(5);
myStack.add(4);
myStack.print();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.peek();
