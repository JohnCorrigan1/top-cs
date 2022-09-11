//stores value
//stores reference to next node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //appends node to end of list
  append(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //appends node to beginning of list
  prepend(val) {
    let newNode = new Node(val);
    //if list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //removes the last node in list
  pop() {
    //if empty list return
    if (!this.head) return undefined;
    //start current
    let current = this.head;
    let newTail = current;
    //while current has a next node
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    //prev = new tail when we reach tail
    this.tail = newTail;
    //sets prev.next to null to remove current tail
    this.tail.next = null;
    this.length--;
    //edge case for list of length 1
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    //returns popped value
    return current;
  }

  //removes node from front of list (remove head)
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }

  //returns length of list
  getSize() {
    return this.length;
  }

  //returns the head node
  getHead() {
    return this.head;
  }

  //returns the tail node
  getTail() {
    return this.tail;
  }

  //returns node of given index starts at 0
  //change position to 1 to start at 1
  at(index) {
    if (!this.head) return undefined;
    let current = this.head;
    let position = 0;
    while (position < index) {
      current = current.next;
      position++;
    }
    return current;
  }

  //returns true if list contains given value else returns false
  contains(val) {
    if (!this.head) return false;
    let current = this.head;
    while (current) {
      if (current.val === val) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  //returns index of node with given value or null
  //starting at 0
  find(val) {
    if (!this.head) return null;
    let current = this.head;
    let index = 0;
    while (current) {
        if (current.val === val) {
            return index;
        } else {
            current = current.next;
            index++;
      }
    }
    return null;
  }

  //returns linkedlist as a string of their values
  listToString(){
    if(!this.head) return undefined;
    let current = this.head;
    let string = ''
    while(current){
        string += `( ${current.val} ) -> `
        current = current.next
    }
    return string += 'null'
  }
}

let list = new LinkedList();
list.append("Hi");
list.append("there");
list.append("pretty cool");
list.append("why is that in brackets");
list.append("easy");

console.log(list.contains("easy"));
console.log(list.find("Hi"))

console.log(list.listToString())
