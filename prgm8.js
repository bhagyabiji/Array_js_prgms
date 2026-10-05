//wap to print all numbers from the given array

a = [ [2,4] , [3,5], [7,9] ]

for(item of a){  //[2,4]
    for( num of item){   //[2,4]
        console.log(num); //2,4
        
    }
}

console.log('--------------------');

// wap to find the highest number

highest = a[0][0]
for(let item of a){
    for( num of item){
        if(highest < num){
            highest = num
        }
    }
}

console.log(highest);


console.log('--------------------');
//wap to find the lowest number

lowest = a[0][0]
for(let item of a){
    for( num of item){
        if(lowest > num){
            lowest = num
        }
    }
}

console.log(lowest);


console.log('--------------------');
//wap to find the sum of all numbers

sum =0
for(item of a){
    for(num of item){
        sum += num
    }
}

console.log(sum);








