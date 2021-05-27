import { ListNode, ListNodeType } from './linked-list';

class Stack {
  head: ListNodeType;
  next: ListNodeType;

  add(data: number) {
    const newNode = new ListNode(data);
    if (!this.head && !this.next) {
      this.head = newNode;
    }
    else {
      this.next = this.head;
      this.head = newNode;
    }
    // console.log('this.head:', this.head);
    // console.log('this.next:', this.next);
  }
  print() {
    if (!this.head && !this.next) {
      console.log('this stack is empty');
    }
    else {
      let stackString = ''
      let currentNode = this.head;
      console.log('this.head:', this.head);
      stackString += currentNode.data.toString();
      console.log('stackString:', stackString)
      console.log('currentNode:', currentNode);
      while (currentNode.nextNode) {
        stackString += currentNode.data.toString();
        console.log('stackString:', stackString)
        currentNode = currentNode.nextNode;
        console.log('currentNode:', currentNode);
      }
      console.log(`Stack: ${stackString}`);
    }
  }
}

const myStack = new Stack();
// myStack.print();
myStack.add(8);
// myStack.print();
myStack.add(6);
myStack.add(5);
// myStack.add(4);
myStack.print();

