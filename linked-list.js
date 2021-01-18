var ListNode = /** @class */ (function () {
    function ListNode(input) {
        this.data = input;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(node) {
        this.head = node;
    }
    LinkedList.prototype.addNode = function (nodeData) {
        var newNode = new ListNode(nodeData);
        var firstNode = this.head;
        var currentNode;
        // if the linked list is empty, set head to newNode 
        if (!firstNode) {
            this.head = newNode;
        }
        // if the linked list only has one node, set tail to newNode
        else if (!firstNode.nextNode) {
            this.head.nextNode = newNode;
        }
        else {
            // if there is more than one node in the linked list, traverse till the tail, and append the newNode as the new tail
            currentNode = firstNode; // set current node to the firstNode (head)
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            // while loop breaks, reach tail
            // append newNode as the new tail
            currentNode.nextNode = newNode;
        }
    };
    // Delete the first node that contains the nodeData
    LinkedList.prototype.deleteNode = function (nodeData) {
        // linked list is empty, throw error
        if (!this.head) {
            throw new Error('Can not delete a linked list that is empty');
        }
        // if the head contains the data we want to delete
        if (this.head.data === nodeData) {
            this.head = this.head.nextNode;
            return;
        }
        var currentNode = this.head;
        while (currentNode.nextNode) {
            if (currentNode.nextNode.data === nodeData) {
                currentNode.nextNode = currentNode.nextNode.nextNode;
                return;
            }
            currentNode = currentNode.nextNode;
        }
    };
    LinkedList.prototype.prependNode = function (nodeData) {
        var newNode = new ListNode(nodeData);
        var currentHead = this.head;
        newNode.nextNode = currentHead;
        this.head = newNode;
    };
    LinkedList.prototype.search = function (nodeData) {
        if (this.head.data === nodeData) {
            return true;
        }
        var currentNode = this.head.nextNode;
        while (currentNode.nextNode) {
            if (currentNode.data === nodeData)
                return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    };
    LinkedList.prototype.displayList = function () {
        var linkedListString = '';
        var firstNode = this.head;
        var currentNode;
        linkedListString += "" + firstNode.data.toString();
        currentNode = firstNode;
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
            linkedListString += " " + currentNode.data.toString();
        }
        console.log(linkedListString);
    };
    return LinkedList;
}());
var headNode = new ListNode(1);
var linkedList = new LinkedList(headNode);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(1);
linkedList.addNode(3);
console.log('before deletion:');
linkedList.displayList();
linkedList.deleteNode(3);
linkedList.deleteNode(3);
console.log('after deletion:');
linkedList.displayList();
linkedList.prependNode(5);
console.log('after prepend:');
linkedList.displayList();
console.log('Does 5 exist in the list:', linkedList.search(5));
console.log('Does 6 exist in the list:', linkedList.search(6));
