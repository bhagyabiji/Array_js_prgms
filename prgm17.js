//using includes()

a = ['mini' , 'maanav', 'max' , 'maxwell']

b = a.includes('max')
console.log(b?'yes':'no');

console.log(a);

//to remove maanav
// a.splice(1,1)

//to remove maanav and add madhav
// a.splice(1,1,'Madhav')

//to add madhav before maanav
// a.splice(1,0,'Madhav')

//to add madhav after maanav
a.splice(2,0,'Madhav')
console.log(a);

//usig indexOf()
console.log(a.indexOf('maxwell'));


//using slice()
 m = a.slice(0,3)
 console.log(m);
 