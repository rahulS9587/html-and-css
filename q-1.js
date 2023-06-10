var LinkedList = {
    head: null,
    tail: null,
    length: 0,
    items: [],
    add: function (value) {
        let node = {
            data: value,
            next: null
        };
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    },
    print: function () {
        let currentnode = this.head;

        let items = [];
        while (currentnode != null) {
            items.push(currentnode.data);
            currentnode = currentnode.next;
        }
        return items.join("->");
    },
    remove: function (value) {
        let currentnode = this.head;
        let previousnode = null;
        while (currentnode != null) {
            if (currentnode.data == value) {
                if (previousnode == null) {  //when it matches with the head
                    this.head = currentnode.next;
                } else {  //when it matches other than a head
                    previousnode.next = currentnode.next;
                }
                this.length--;
            }   
            previousnode = currentnode;
            currentnode = currentnode.next;
            }
    },
    isempty: function () {
        return this.length == 0;
    }
}