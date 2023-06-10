function union(){
    let unionSet = new Set();
    for(let elem of s1){
        unionSet.add(elem);
    }
    for(let elem of s2){
        unionSet.add(elem);
    }
    return unionSet;
}
function intersection(){
    var intersectionSet = new Set();
    for(var elem of s1){
       if( s2.has(elem)){
            intersectionSet.add(elem);

        }
    }
    return intersectionSet;
}
function difference(){
    var differenceSet = new Set();
    for(let  elem of s1){
       if( !s2.has(elem)){
            differenceSet.add(elem);

        }
    }
    return differenceSet;

}