class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value)

        if(!this.root){
            this.root = newNode
            return this;
        }
        else{
            let current = this.root;
            while(true){
                if(value < current.value){
                    if(!current.left){
                        current.left = newNode;
                        return;
                    }
                    else{
                        current = current.left
                    }
                }
                else{
                    if(!current.right){
                        current.right = newNode
                        return;
                    }
                    else{
                        current = current.right;
                    }
                }
            }
        }
    }
}


let tree = new BinarySearchTree();

tree.insert(20)
tree.insert(10)
tree.insert(30)
tree.insert(25)

console.log(tree)