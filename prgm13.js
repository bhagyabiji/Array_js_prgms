//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 

console.log('Employee name');
employee.forEach(item => console.log((item[1]))
);

console.log('-----------------------------');

//print total numbers of employee

console.log(`total numbers of employee - ${employee.length}`);

console.log('-----------------------------');


//print developer employee details
console.log('developer employee details');

newArray = employee.filter((item) => item[2]=='developer')
console.log(newArray); //returns array, if need each array item use for each to newArray

console.log('-----------------------------------');

//print employee name whose salary > 30000

console.log('employee name whose salary > 30000');

employee.filter((item) => item[4]>=30000 ).forEach((emp) => console.log(emp[1]))



console.log('----------------------------------');

// print details of employee Laisha
console.log('Details of employee Laisha');


employee.filter((item) => item[1] == 'Laisha').forEach((emp) => console.log(emp))

//can use find() also

// laisha = employee.find((emp)=> emp[1]=='Laisha')
// console.log(laisha);
console.log('---------------------------------');


//arrange employee based on their salary in descending order
console.log('salary in descending order');
employee.sort((emp1,emp2) => emp2[4] - emp1[4])
console.log(employee);

console.log('-----------------------------------');

//arrange employee based on their experience in ascending order
console.log('salary in ascending order');
employee.sort((emp1,emp2) => emp1[5] - emp2[5])
console.log(employee);

console.log('-----------------------------');

// print the employ name whose have the higest salary

highSalary = employee.sort((emp1,emp2) => emp2[4] - emp1[4])
console.log(highSalary[0][1]);

console.log('------------------------------');

//print employee details with lowest salary

low = employee.reduce((emp1,emp2) => emp1[4]<emp2[4]?emp1:emp2)
console.log(low);

console.log('------------------------------');

//find the total expense of the company

total = employee.map((item) =>item[4]).reduce((sal1,sal2) => sal1+sal2)
console.log(total);
