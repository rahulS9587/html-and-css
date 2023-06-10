var stack={
    items:[],
    length:0,
    push:function(value){
        //adding to stack
        this.items.push(value);
        this.length++;
    },
    pop: function(value){
        //remove and return the last item from the stack
        this.length--;
        return this.items.pop()
    },
    peek:function(){
        return this.items[this.length-1];

    },
    printtable:function(){
        return printtable;

    },
    isempty:function(){
        return this.items.length==0;
    }

}