class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor(arr) {
    this.arr = sort(arr)
    console.log(this.arr)
    this.root = this.buildTree(0, arr.length - 1);
  }

  buildTree(start, end) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let newNode = new Node(this.arr[mid]);
    newNode.left = this.buildTree(start, mid - 1);
    newNode.right = this.buildTree(mid + 1, end);
    return newNode;
  }

  height(root) {
    if (!root) return 0;
    return Math.max(this.height(root.left), this.height(root.right)) + 1;
  }

  // function to check if tree is height-balanced or not
  isBalanced(root) {
    // Base condition
    if (!root) return true;
    // for left and right subtree height
    let left = this.height(root.left);
    let right = this.height(root.right);
    // allowed values for (lh - rh) are 1, -1, 0
    if (
      Math.abs(left - right) <= 1 &&
      this.isBalanced(root.left) == true &&
      this.isBalanced(root.right) == true
    )
      return true;
    return false;
  }

  rebalance() {
    const newArr = this.inOrder();
    let tree = new BinarySearchTree(newArr);
    return tree;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (current !== null) {
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
    let queue = [];
    let visited = [];
    let node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }

  //depth first
  preOrder() {
    let visited = [];
    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  postOrder() {
    let visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }
    traverse(this.root);
    return visited;
  }

  inOrder() {
    let visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  depth(root, node) {
    if (!root) return -1;
    let dist = -1;
    if (
      root == node ||
      (dist = this.depth(root.left, node)) >= 0 ||
      (dist = this.depth(root.right, node)) >= 0
    ) {
      return dist + 1;
    }
    return dist;
  }
}

const arr = [1, 2, 10, 23, 8, 9, 4, 3, 5, 7, 20, 67, 324];
let tree = new BinarySearchTree(arr);

tree.insert(30);
tree.insert(25);
tree.insert(-1);
tree.insert(-10);
tree.insert(-3);
tree.insert(-2);
tree.insert(200);
tree.insert(300);
tree.insert(500);
tree.insert(600);
tree.insert(5000);
tree.insert(700);
tree.insert(1000);
tree.insert(800);

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
  console.log(tree.bfs());
  console.log("height before: ", tree.height(tree.find(6000)));
console.log(tree.isBalanced(tree.root));
console.log(tree.inOrder())
tree.rebalance();
prettyPrint(tree.root, "", "");
console.log(tree.isBalanced());
  console.log("height after: ", tree.height(tree.find(6000)));
  console.log(tree.preOrder());
  console.log(tree.postOrder());
tree.find(6000)
  console.log(tree.depth(tree.root, tree.find(6000)));
  console.log(tree.depth(tree.root, tree.find(1000)));

console.log(tree.inOrder())


const myarr = [1, 2, 3, 10, 4, 7, 4, 6, 5]

console.log(sort(myarr))