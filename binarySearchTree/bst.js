class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor(arr) {
    this.arr = sort(arr);
    this.root = this.findRoot(this.arr, 0, this.arr.length - 1);
    this.buildTree(this.arr, 0, this.arr.length - 1);
  }

  findRoot(arr, start, end) {
    if (start > end) return null;

    let arrMid = Math.floor((start + end) / 2);
    let rootNode = new Node(arr[arrMid]);

    return rootNode;
  }

  buildTree(arr, start, end) {
    let arrMid = Math.floor((start + end) / 2);
    let left = arrMid - 1;
    let right = arrMid + 1;

    while (left > start) {
      this.insert(arr[left]);
      left--;
    }

    while (right < end) {
      this.insert(arr[right]);
      right++;
    }
  }

  rebalance(arr){
    let newTreeArray = this.bfs()

    let rebalanced = new BinarySearchTree(newTreeArray)
    return rebalanced
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

  
  find(value) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return current;
  }

  //breadth first search
  bfs() {
    let queue = []
    let visited = []
    let node = this.root

    queue.push(node)

    while(queue.length){
      node = queue.shift();
      visited.push(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return visited;
  }

  //depth first
  preOrder(){

  }
}

const arr = [1, 2, 10, 23, 8, 9, 4, 3, 5, 7, 20, 67, 6345, 324];
let tree = new BinarySearchTree(arr);


tree.insert(30);
tree.insert(25);
tree.insert(-1);
tree.insert(-10);
tree.insert(-3);
tree.insert(-2);
tree.insert(200)
tree.insert(300)
tree.insert(500)
tree.insert(600)
console.log(tree);

// console.log(tree.find(30));

//prints tree structure
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

// sort array with merge sort to balance tree
function sort(arr) {
  if (arr.length <= 1) return arr;
  
  const middle = Math.floor(arr.length / 2);
  let left = sort(arr.slice(0, middle));
  let right = sort(arr.slice(middle));
  return merge(left, right);
}

function merge(arr1, arr2) {
  const merged = [];
  let i = 0;
  let j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else if (arr2[j] <= arr1[i]) {
      merged.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  return merged;
}

prettyPrint(tree.root, "", "");
// console.log(tree.bfs())
tree = tree.rebalance()
prettyPrint(tree.root, "", "");