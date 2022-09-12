class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }
    }
  }

  find(value){
    if(!this.root) return false;
    let current = this.root;
    let found = false;
    while(current && !found){
        if(value < current.value){
            current = current.left
        } else if(value > current.value){
            current = current.right;
        }
        else{
            found = true;
        }
    }
    return current
  }
}

let tree = new BinarySearchTree();

tree.insert(20);
tree.insert(10);
tree.insert(30);
tree.insert(25);

console.log(tree);

console.log(tree.find(30))


// const prettyPrint = (node, prefix = '', isLeft = true) => {
//     if (node.right !== null) {
//       prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
//     }
//     console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
//     if (node.left !== null) {
//       prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
//     }
//   }