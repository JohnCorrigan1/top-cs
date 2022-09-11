//stores value
//stores reference to next node
class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(val){
        let newNode = new Node(val)
        if(!this.head){
           this.head = newNode
           this.tail = this.head
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        //if empty list return
        if(!this.head) return undefined
        //start current
        let current = this.head
        let newTail = current
        //while current has a next node 
        while(current.next){ 
            newTail = current
            current = current.next
        }
        //prev = new tail when we reach tail
        this.tail = newTail
        //sets prev.next to null to remove current tail
        this.tail.next = null
        this.length--
        //edge case for list of length 1
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        //returns popped value
        return current;
    }

    shift(){
        
    }
}

let list = new LinkedList()
list.append("Hi")
list.append("there")
list.append("pretty cool")
list.append("why is that in brackets")
list.append("easy")

console.log(list)

list.pop()
console.log(list)