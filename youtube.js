const companies = [
  { name: "company1", category: "finance", start: 1983, end: 2012 },
  { name: "company3", category: "sale", start: 1964, end: 2011 },
  { name: "company2", category: "auto", start: 1943, end: 2021 },
  { name: "company4", category: "movie", start: 1984, end: 2016 },
  { name: "company5", category: "whatever", start: 1992, end: 2001 },
  { name: "company6", category: "finance", start: 1929, end: 2020 },
  { name: "company7", category: "adult", start: 1934, end: 2013 },
  { name: "company8", category: "auto", start: 1986, end: 2015 },
  { name: "company9", category: "music", start: 1983, end: 2001 },
];

let ages = [23, 43, 45, 23, 53, 53, 57, 86, 23, 47, 86, 93, 23];


// companies.forEach(element => {
//     console.log(element.name);
// });

// let canSuicide = []
// for (let index = 0; index < ages.length; index++) {
//         if (ages[index]>=45) {
//             canSuicide.push(ages[index]);
//         }
// }
// let canSuicide = ages.filter(function(element){
//     if (element>45) {
//         return true
//     }
// })
// let canSuicide = ages.filter(age=>age>45)
//console.log(canSuicide);
// let some = companies.filter(element=>element.category=="auto")
// console.log(some);

// let started = companies.filter(e=>e.start>1980)
// console.log(started);

// let died = companies.filter(e=>e.end>2005)
// console.log(died);

// let names = companies.map(e=>`${e.name} - [${e.start} - ${e.end}]`)
// console.log(names);

// let sqr = ages
// .map(e=>Math.sqrt(e))
// .map(e=>e*2)
// console.log(sqr);



// let sort = companies.sort((a,b)=>(a.end > b.end?1:-1))

// console.log(sort);

// let sortage = ages.sort((a,b)=>(a<b?1:-1))
// console.log(sortage);

// let age= ages.reduce((total, age)=>total+age,0)

// console.log(age);

// let total = companies.reduce((total, c)=>total+(c.end-c.start),0)
// console.log(total);

//let comb = ages.map(a=>a*2).filter(a=>a>45).sort((a,b)=>a-b).reduce((a,b)=>a+b,0)
//console.log(comb);