"use strict";
exports.__esModule = true;
var linked_list_1 = require("./linked-list");
var Stack = /** @class */ (function () {
    function Stack() {
    }
    Stack.prototype.add = function (data) {
        var newNode = new linked_list_1.ListNode(data);
        if (!this.head && !this.next) {
            this.head = newNode;
        }
        else {
            this.next = this.head;
            this.head = newNode;
        }
        // console.log('this.head:', this.head);
        // console.log('this.next:', this.next);
    };
    Stack.prototype.print = function () {
        if (!this.head && !this.next) {
            console.log('this stack is empty');
        }
        else {
            var stackString = '';
            var currentNode = this.head;
            console.log('this.head:', this.head);
            stackString += currentNode.data.toString();
            console.log('stackString:', stackString);
            console.log('currentNode:', currentNode);
            while (currentNode.nextNode) {
                stackString += currentNode.data.toString();
                console.log('stackString:', stackString);
                currentNode = currentNode.nextNode;
                console.log('currentNode:', currentNode);
            }
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
