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
      this.head.nextNode = newNode;
    }
    else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
      this.tail.nextNode = null;
    }
  }

  pop() {
    if (!this.head && !this.tail) {
      console.log('queue is empty, nothing to delete');
    }
    else if (this.head && !this.tail) {
      this.head = null;
    }
    else {
      this.head = this.head.nextNode;
    }
  }

  peek() {
    console.log(`${this.head.data} is at the front of the queue`);
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
      queueString = `${currentNode?.data.toString()} ${queueString}`;
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
myQueue.print();
myQueue.add(4);
myQueue.print();
myQueue.pop();
myQueue.pop();
myQueue.print();
myQueue.peek();
