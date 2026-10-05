a= [1,2,3,4,5]

//highest
highest = a.reduce((num1,num2) => num1>num2?num1:num2)
console.log(`highest = ${highest}`);

console.log('---------------------');
// 1st iteration num1 = 1 , num2 = 1 => 1>1 not -> so num2 which is 1, this value goes as num1 in 2nd iteration
//2nd iteration num1=1 , num2= 2

//lowest
lowest = a.reduce((num1,num2) => num1<num2?num1:num2)
console.log(`lowest = ${lowest}`);

console.log('---------------------');

//sum pf all
sum = a.reduce((num1,num2) => num1+num2)
console.log(`sum = ${sum}`);

console.log('---------------------');
