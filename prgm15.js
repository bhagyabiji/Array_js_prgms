//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district name having Highest +ve case 
console.log('----------------------------------');

high = covid_data.reduce((data1,data2) => data1[2]>data2[2]?data1:data2)
console.log(`district name having Highest +ve case: ${high[1]}`);

console.log('----------------------------------');


//2. district having Highest 1st dose vaccine

highDose = covid_data.reduce((data1,data2) => data1[5]>data2[5]?data1:data2)
console.log(`district name having Highest 1st dose vaccine: ${highDose[1]}`);

console.log('----------------------------------');

//3. district having lowest death rate

low = covid_data.reduce((data1,data2) => data1[3]<data2[3]?data1:data2)
console.log(`district name having lowest death rate: ${low[1]}`);

console.log('----------------------------------');


//4. sort data with +ve case in descending order

covid_data.sort((case1,case2) => case2[2] - case1[2] ).forEach((item)=> console.log(item))
console.log('----------------------------------');


//5. is district with +ve cases > 15000

console.log(covid_data.some((data) => data[2]>15000)?'Yes! district with +ve cases > 15000 is present':'Not present')
console.log('----------------------------------');

//6. sort data with 1st dose vaccine ascending order

covid_data.sort((case1,case2) => case1[5] - case2[5] ).forEach((item)=> console.log(item))

console.log('-----------------------------------------------');


//7. Print Thrissur details

covid_data.filter((data) => data[1] == 'Thrissur').forEach((item) => console.log(item))
console.log('----------------------------------');

//8. Print total number of positive cases

console.log('total number of positive cases: ' + covid_data.map((item) =>item[2]).reduce((data1,data2) => data1+data2))
console.log('----------------------------------');

//9. Print total number of curred cases

console.log('total number of curred cases: ' + covid_data.map((item) =>item[4]).reduce((data1,data2) => data1+data2))
console.log('----------------------------------');


//10. Print curred cases in Idukki

covid_data.filter((data) => data[1] == 'Idukki').forEach((item) => console.log('curred cases in Idukki: ' + item[4]))