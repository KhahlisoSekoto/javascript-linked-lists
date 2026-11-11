import { Node } from './Node.js';

export class LinkedList {
  constructor() {
    this.headNode = null;
    this._size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
    } else {
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
    this._size++;
  }

  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
    this._size++;
  }

  size() {
    return this._size;
  }

  head() {
    return this.headNode ? this.headNode.value : undefined;
  }

  tail() {
    if (!this.headNode) return undefined;
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current.value;
  }

  at(index) {
    if (index < 0 || index >= this._size || !this.headNode) return undefined;
    let current = this.headNode;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current.value;
  }

  pop() {
    if (!this.headNode) return undefined;
    const removedValue = this.headNode.value;
    this.headNode = this.headNode.nextNode;
    this._size--;
    return removedValue;
  }

  contains(value) {
    let current = this.headNode;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  findIndex(value) {
    let current = this.headNode;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return -1;
  }

  toString() {
    if (!this.headNode) return '';
    let result = '';
    let current = this.headNode;
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return result + 'null';
  }

  insertAt(index, ...values) {
    if (index < 0 || index > this._size) {
      throw new RangeError('Index out of bounds');
    }
    if (values.length === 0) return;

    const firstNewNode = new Node(values[0]);
    let lastNewNode = firstNewNode;
    for (let i = 1; i < values.length; i++) {
      lastNewNode.nextNode = new Node(values[i]);
      lastNewNode = lastNewNode.nextNode;
    }

    if (index === 0) {
      lastNewNode.nextNode = this.headNode;
      this.headNode = firstNewNode;
    } else {
      let current = this.headNode;
      for (let i = 0; i < index - 1; i++) {
        current = current.nextNode;
      }
      lastNewNode.nextNode = current.nextNode;
      current.nextNode = firstNewNode;
    }
    this._size += values.length;
  }

  removeAt(index) {
    if (index < 0 || index >= this._size) {
      throw new RangeError('Index out of bounds');
    }

    if (index === 0) {
      this.headNode = this.headNode.nextNode;
    } else {
      let current = this.headNode;
      for (let i = 0; i < index - 1; i++) {
        current = current.nextNode;
      }
      current.nextNode = current.nextNode.nextNode;
    }
    this._size--;
  }
}