function binarysearch(arr,n){
    let l=0;
    let r = arr.length-1
    let m;
    while (r>=1){
        mid = l+Math.floor((r-l)/2);
        if(arr[mid]==n){
            return mid;
        }
        if(arr[mid]>n){
            r=mid-1;
        }else{
            l=mid+1;
        }
    }
    return false
}