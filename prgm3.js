

//wap to find whether 2 is present in the array or not
arr = [10, 11, 12, 3, 4, 2]
search = 2
isPresent = false
for (i of arr) {
    if (i == search) {
        isPresent = true
    }
}
console.log(isPresent ? `${search} is present` : 'not present');


console.log('-----------');

// a = [4,5,6]
// o/p = [11,10,9]

a = [4, 5, 6]
output = []
for (i of a) {
    output.push(15 - i)
}
console.log(output);

console.log('----------------');

//wap to find the duplicate element formt the given array
//output - [10,20,30]

array = [10, 20, 30, 20, 30, 40, 50, 60,10, 10]    
duplicate = []   
for (i=0;i<=array.length-1;i++) {
    for(j=i+1;j<=array.length-1;j++){
        if(array[i] == array[j]){
            isDupli = false
            for(k=0;k<=0;k++) {
                if(array[i] == duplicate[k]){   // to check element is already in the output array.if yes will not push into output.
                    isDupli = true
                }
            }
            if(!isDupli){
                duplicate.push(array[j])
            }
        }
    }
}
console.log(duplicate.length==0?'No duplicate Numbers': duplicate);
//duplicate.length==0 to check no duplicates numbers, which means if no duplicate elements is present the duplicate array will be empty ie, .length==0.


console.log('-----------------------');



