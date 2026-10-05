console.log('-------using filter()---------');
 

a = [12 , 41 , 6 , 5 , 22]

//wap to print all even numbers in the given array
console.log('-------even nums--------');

newArr = a.filter((even) => even%2==0)
console.log(newArr);

//wap to print all odd numbers in the given array

console.log('-------odd nums--------');
o = a.filter((odd) => odd%2!=0)
console.log(o);



console.log('-------using some()---------');

//is there any even numbers in the given array

e = a.some((even) => even%2==0)
console.log(e?'yes even num present':'no even nums present');


//is there any odd numbers in the given array

od = a.some((num) => num%2!=0)
console.log(od?'yes odd num present':'no odd nums present');


//using find() -> gives the first element satisfying the condition
console.log('----using find()----------');


od = a.find((num) => num%2!=0)
console.log(od);