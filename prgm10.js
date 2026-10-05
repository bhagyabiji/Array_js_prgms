a = [1,2,3,4,5]

//wap to print all the items from the given array

for(let item of a ){
    console.log(item);
    
}

console.log('------------------------');

a.forEach(item => console.log(item));

console.log('---------using forEach()---------------');

//wap to find square of all the elements in the given array

a.forEach(item => console.log(item**2));

console.log('------------using map()------------');

sq = a.map((item) => item**2)
console.log(sq);

//wap to create a new array with numbers <= 3 then increment by one else decrement by 1
// a = [1,2,3,4,5]
// o/p =[2,3,4,3,4]
console.log('---------------------------');

number = a.map((num) => num<=3?num+1:num-1)
console.log(number);


console.log('---------------------------');

