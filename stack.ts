import { ListNode, ListNodeType } from './linked-list';

class Stack {
  head: ListNodeType;

  add(data: number) {
    const newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
      this.head.nextNode = null;
    }
    else {
      const newNextNode = this.head;
      this.head = newNode;
      this.head.nextNode = newNextNode;
    }
  }
  print() {
    if (!this.head) {
      console.log('this stack is empty');
    }
    else {
      let stackString = ''
      let currentNode = this.head;
      while (currentNode.nextNode) {
        stackString += currentNode.data.toString();
        currentNode = currentNode.nextNode;
      }
      stackString += currentNode.data.toString();
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

