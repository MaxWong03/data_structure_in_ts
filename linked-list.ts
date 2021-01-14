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
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      // while loop breaks, reach tail
      // append newNode as the new tail
      currentNode.nextNode = newNode;
    }
  }

  deleteNode(nodeData: number) {
    const firstNode = this.head;
    // linked list is empty, throw error
    if (!firstNode) {
      throw new Error('Can not delete a linked list that is empty');
    }
    // the linked list only has a head and head contains what we want to delete
    if (this.head.data === nodeData && !this.head.nextNode) return null;
    // linked list with length > 1
    // head contains what we want to delete
    if (this.head.data === nodeData && this.head.nextNode) {
      // remove head
      this.head = this.head.nextNode;
    }
    // set currentNode pointer to head
    let currentNode = this.head;
    let prevNode;
    while (currentNode.nextNode) {
      if (currentNode.data !== nodeData) {
        prevNode = currentNode;
        currentNode = currentNode.nextNode;
      }
      if (currentNode.data === nodeData) {
        if (currentNode === this.head) this.head = this.head.nextNode;
        else prevNode!.nextNode = currentNode.nextNode;
      }
    }
  }

  displayList() {
    let linkedListString = '';
    const firstNode = this.head;
    let currentNode;
    linkedListString += `${firstNode.data.toString()}`
    currentNode = firstNode;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      linkedListString += ` ${currentNode.data.toString()}`
    }
    console.log(linkedListString);
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
console.log('after deletion:'); 
linkedList.displayList();

