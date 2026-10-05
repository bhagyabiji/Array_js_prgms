//using flat()

a = [[2,4] , [3,5] , [7,9]]

b = a.flat()
console.log(b);

console.log('----------------------------');


k = [[2,4] , [3,5,[4,6]] , [7,9, [5,8,[3,5]]]]

m = k.flat(Infinity)
console.log(m);
