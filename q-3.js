var Queue = {
    items:[],
    data: [],
    rear: 0,
    size: 10,
    enqueue(value) {
        if (this.rear < this.size) {
            this.items.push(value);
            this.length++;
        }
    },
    dequeue:function(value) {

        this.length--;
            return this.data.shift();
        },
        isempty:function(){
            if(length==0){
                return null
            }
        },
    }


