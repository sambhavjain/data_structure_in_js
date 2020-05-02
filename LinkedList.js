class Node {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// const n1 = new Node(100)
// console.log(n1);


class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    //Insert head
    insertFirstNode (data) {
        const n = new Node(data, this.head);
        this.head = n;
        this.size ++;
        let curr = this.head;
        if(curr.next) {
            this.tail = curr.next;
            curr = curr.next;
        } else {
            this.tail = this.head;
        }
    }

    //Insert Last Node
    insertLastNode (data) {
        const n = new Node(data);
        if(!this.head) {
            this.head = n;
            this.tail = n;
        } else {
            this.tail.next = n;
            this.tail = n;
        }
        this.size ++;
        
    }

    //Insert at ith index
    insertNodeAt (data, index) {
        const node = new Node(data);
        let curr = this.head, prev;
        let i = 0;
        while(curr && (i < index)) {
            i ++;
            prev = curr;
            curr = curr.next;
        }
        if(i === index){
           node.next = curr;
           prev.next = node;
        }
        
        // console.log('node added', node)
    }
    //get data from ith index

    //remove at node
    removeNodeAt (index) {
        let curr = this.head, prev;
        let count = 0;
        while ( count < index ) {
            prev = curr;
            curr = curr.next;
            count ++;
        }
        prev.next = curr.next;
    }
    
    //print all nodes
    printNodes () {
        let curr = this.head;
        while(curr !== null) {
            console.log(curr.data);
            curr = curr.next;
        }
    }


}

const ll = new LinkedList();
ll.insertFirstNode(100);
ll.insertLastNode(200);
ll.insertLastNode(300);
ll.insertLastNode(400);
ll.insertNodeAt(50, 2);
ll.removeNodeAt(2);
ll.printNodes();
// console.log(ll);