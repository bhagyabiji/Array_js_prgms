expense = [12000 , 5000, 28000 , 10000 , 6000 ]

// find the least expense - 5000
// find the highest expense - 28000
// find the total expense

lowest = expense[0]
for(let i of expense){
    if(lowest > i){
       lowest = i
       
    }
}
console.log('the least expense is', lowest);

highest = expense[0]
for(i of expense){
    if(highest < i){
        highest=i
    }
}
console.log('the highest expense is', highest);

sum=0
for(i of expense){
    sum += i
}
console.log('the total expense is', sum);
