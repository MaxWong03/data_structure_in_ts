class ListNode {
  nextNode: ListNode;
  data: number;

  constructor(input: number) {
    this.data = input;
  }
}

class LinkedList {
  head: ListNode;

  constructor(node: ListNode) {
    this.head = node;
  }

  addNode(nodeData: number) {
    const newNode = new ListNode(nodeData);
    const firstNode = this.head;
    let currentNode;

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
      while(currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      // while loop breaks, reach tail
      // append newNode as the new tail
      currentNode.nextNode = newNode;
    }
  }

  displayList() {
    let linkedListString = '';
    const firstNode = this.head;
    let currentNode;
    linkedListString += `${firstNode.data.toString()}`
    currentNode = firstNode;
    while(currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      linkedListString += ` ${currentNode.data.toString()}`
    }
    console.log(linkedListString);
  }
}

const headNode = new ListNode(5);

const linkedList = new LinkedList(headNode);
linkedList.displayList();
linkedList.addNode(7);
linkedList.displayList();
