function linearsearch(arr,item){
    let found=false;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==item){
            found = true;
            break;

        }
    }
    return found;
}