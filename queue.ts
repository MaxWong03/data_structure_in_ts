import { ListNode, ListNodeType } from './linked-list';

class Queue {
  head: ListNodeType;
  tail: ListNodeType;

  add(data: number) {
    const newNode = new ListNode(data);
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.head.nextNode = null;
      this.tail = null;
    }
    else if (this.head && !this.tail) {
      this.tail = newNode;
      this.head.nextNode = this.tail;
    }
    else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
      this.tail.nextNode = null;
    }
  }

  print() {
    if(!this.head && !this.tail) {
      console.log('this queue is empty');
    }
    else if (this.head && !this.tail) {
      console.log('Queue:', this.head.data.toString());
    }
    else {
      let queueString = '';
      let currentNode = this.head;
      // console.log('currentNode:', currentNode);
      while (currentNode.nextNode) {
        queueString = `${currentNode?.data.toString()} ${queueString}`;
        currentNode = currentNode.nextNode;
      }
      console.log('Queue (from right to left):', queueString);
    }
  }
}

const myQueue = new Queue();
myQueue.print();
myQueue.add(8);
myQueue.print();
myQueue.add(6);
myQueue.add(5);
myQueue.add(4);
myQueue.print();