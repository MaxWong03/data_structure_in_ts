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
    LinkedList.prototype.deleteNode = function (nodeData) {
        var firstNode = this.head;
        // linked list is empty, throw error
        if (!firstNode) {
            throw new Error('Can not delete a linked list that is empty');
        }
        // the linked list only has a head and head contains what we want to delete
        if (this.head.data === nodeData && !this.head.nextNode)
            return null;
        // linked list with length > 1
        // head contains what we want to delete
        if (this.head.data === nodeData && this.head.nextNode) {
            // remove head
            this.head = this.head.nextNode;
        }
        // set currentNode pointer to head
        var currentNode = this.head;
        var prevNode;
        while (currentNode.nextNode) {
            if (currentNode.data !== nodeData) {
                prevNode = currentNode;
                currentNode = currentNode.nextNode;
            }
            if (currentNode.data === nodeData) {
                if (currentNode === this.head)
                    this.head = this.head.nextNode;
                else
                    prevNode.nextNode = currentNode.nextNode;
            }
        }
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
console.log('before deletion:');
linkedList.displayList();
linkedList.deleteNode(3);
console.log('after deletion:');
linkedList.displayList();
