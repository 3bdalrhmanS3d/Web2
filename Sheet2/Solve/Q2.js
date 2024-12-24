function countOccurrences(arr, val) {
    var cnt = 0 ;
    for( var i =0 ; i < arr.length ; i++){
        if(arr[i] == val){
            cnt++;
        }
    }

    return cnt;
}

var Lit = [1, -2, 33, 88, 4, 5, 6,6,6,6,]
var val = 6;
console.log(`The count Occurrences of ${val} Is  ${countOccurrences(Lit, 6)} .` );
