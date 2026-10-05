//displaying an array

weekday = ['monday', 'tuesday', 'saturday']

console.log(weekday);
console.log(weekday[2]);
console.log(weekday[1]);
console.log(typeof(weekday));

console.log('--------using for loop----------------');

for(i=0;i<=weekday.length-1;i++){
    console.log(weekday[i]);
    
}

console.log('--------using for in----------------');
for(let i in weekday){
    //console.log(i); will give index values
    
    console.log(weekday[i]);
    
}

console.log('--------using for of----------------');
 for(let i of weekday){
    console.log(i);
    
 }

console.log(weekday);

console.log('--------using push() operation-------');
weekday.push('friday')
console.log(weekday);

console.log('-----using unshift()operation------');
weekday.unshift('Sunday')
console.log(weekday);

weekday.push(3)
console.log(weekday);

console.log('--------using pop() operation-------');
weekday.pop()
console.log(weekday);

console.log('-----using shift()operation------');
weekday.shift()
console.log(weekday); ///removed the first item 