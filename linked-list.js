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
var headNode = new ListNode(5);
var linkedList = new LinkedList(headNode);
linkedList.displayList();
linkedList.addNode(7);
linkedList.displayList();
