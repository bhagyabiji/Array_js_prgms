//wap to find the pairs whose sum is 6
// a = [2,3,4,5]    o/p - (2,4)


a = [2,3,4,5] 
isFound = false
for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        if(a[i]+a[j] == 7){
            console.log(`(${a[i]} , ${a[j]})`);
            isFound = true
        }
    }

}
if(!isFound) {
    console.log('no pairs');
    
}
console.log('------------------------');

//wap to print the common numbers from two given array
p = [10,11,12,20,30]
q = [11,20,25,30,33]

common = []
for(m of p){
    for(n of q){
        if(m == n){
            common.push(m)
            isCommon = false
        }
    }
}
console.log(common.length==0?'No common Numbers': common);
