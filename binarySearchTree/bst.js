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

  isBalanced(root) {
    if (!root) return true;

    let left = this.height(root.left);
    let right = this.height(root.right);
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
  levelOrder() {
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

function driver(){

  const myArr = [10, 29, 31, 100, 101, 2, 3, 1, 7, 23, 15, 17, 64, 21, 69, 89, 888]
  let bst = new BinarySearchTree(myArr)

  console.log(bst.isBalanced(bst.root))

  console.log(bst.levelOrder())
  console.log(bst.preOrder())
  console.log(bst.postOrder())
  console.log(bst.inOrder())

  //unbalances tree
  bst.insert(200)
  bst.insert(300)
  bst.insert(1000)
  bst.insert(900)
  bst.insert(700)
  bst.insert(600)
  bst.insert(2000)
  bst.insert(201)
  bst.insert(301)
  bst.insert(1010)
  bst.insert(901)
  bst.insert(500)
  bst.insert(400)
  bst.insert(5000)

  
  prettyPrint(bst.root, "", "" )
  //bst is now unbalanced
  console.log(bst.isBalanced(bst.root))
  //rebalance
  bst = bst.rebalance()
  //yay prints true
  console.log(bst.isBalanced(bst.root))
  prettyPrint(bst.root, "", "")
}

driver();