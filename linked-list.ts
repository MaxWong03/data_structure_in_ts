class ListNode {
  nextNode: ListNode;
  data: number;

  constructor(input: number) {
    this.data = input;
  }
}

class LinkedList {
  head: ListNode;
  tail: ListNode;

  constructor(node: ListNode) {
    this.head = node;
    this.tail = node;
  }

  addNode(nodeData: number) {
    const newNode = new ListNode(nodeData);
    const firstNode = this.head;
    let currentNode;

    // if the linked list is empty, set head to newNode, also set tail to the newNode
    if (!firstNode) {
      this.head = newNode;
      this.tail = newNode;
    }

    // if the linked list only has one node, set tail to newNode
    else if (!firstNode.nextNode) {
      this.head.nextNode = newNode;
      this.tail = newNode;
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
      this.tail = newNode;
    }
  }

  // Delete the first node that contains the nodeData
  deleteNode(nodeData: number) {
    // linked list is empty, throw error
    if (!this.head) {
      throw new Error('Can not delete a linked list that is empty');
    }
    // if the head contains the data we want to delete
    if (this.head.data === nodeData) {
      this.head = this.head.nextNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.nextNode) {
      if (currentNode.nextNode.data === nodeData) {
        currentNode.nextNode = currentNode.nextNode.nextNode;
        if (!currentNode.nextNode) this.tail = currentNode;
        return;
      }
      currentNode = currentNode.nextNode;
    }
  }

  prependNode(nodeData: number) {
    const newNode = new ListNode(nodeData);
    const currentHead = this.head;
    newNode.nextNode = currentHead;
    this.head = newNode;
  }

  search(nodeData: number) {
    if (this.head.data === nodeData) {
      return true;
    }
    let currentNode = this.head.nextNode;
    while (currentNode.nextNode) {
      if (currentNode.data === nodeData) return true
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  displayList() {
    let linkedListString = '';
    const firstNode = this.head;
    let currentNode;
    linkedListString += `${firstNode.data.toString()}`;
    currentNode = firstNode;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      linkedListString += ` ${currentNode.data.toString()}`
    }
    console.log(linkedListString);
  }

  reverseList() {
    // https://www.geeksforgeeks.org/reverse-a-linked-list/
  }
}

const headNode = new ListNode(1);

const linkedList = new LinkedList(headNode);
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


