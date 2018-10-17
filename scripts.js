// // JS Data ---  Book 3; Chapter 4


// // Individual arrays holding monthly data for each year
// const _1948 = [3.4, 3.8, 4.0, 3.9, 3.5, 3.6, 3.6]
// const _1949 = [4.3, 4.7, 5.0, 5.3, 6.1, 6.2, 6.7]
// const _1950 = [6.5, 6.4, 6.3, 5.8, 5.5, 5.4, 5.0]
// const _1951 = [3.7, 3.4, 3.4, 3.1, 3.0, 3.2, 3.1]
// const _1952 = [5.8, 6.4, 6.7, 7.4, 7.4, 7.3, 7.5]

// // Outer array holding each year's array of data
// // array of arrays**
// const RainfallDatabase = [_1948, _1949, _1950, _1951, _1952]

// // Find out how much total rain has fallen over last 10 years
// let totalRainfall = 0

// // This iterates the outer array
// // basically call out each year
// for (let i = 0; i < RainfallDatabase.length; i++) {
//     const yearlyData = RainfallDatabase[i]
    
    

//     // This iterates each individual array of numbers
//     // below you can actually say let i = 0 again (let j is old-school)
//     // must use "let" --- not just i=0 otherwise a higher scope would be utilized
//     for (let j = 0; j < yearlyData.length; j++) {
//       // below is a calculation pulling in all monthly rainfall
//         const monthlyData = yearlyData[j]
//         // below we are adding monthly rainfall
//         totalRainfall = totalRainfall + monthlyData
//     }
// }

// // "toFixed"  rounds the decimal, BUT returns a string
// console.log("total rainfall = ", totalRainfall.toFixed(2))

// Objects and Arrays for Data:

// this is a way to allow for labeling(defining keys) data:
// This is how we'll use data in json dbs

// const RainfallDatabase = {
//   "1948" : [3.4, 3.8, 4.0, 3.9, 3.5, 3.6, 3.6],
//   "1949" : [4.3, 4.7, 5.0, 5.3, 6.1, 6.2, 6.7],
//   "1950" : [6.5, 6.4, 6.3, 5.8, 5.5, 5.4, 5.0],
//   "1951" : [3.7, 3.4, 3.4, 3.1, 3.0, 3.2, 3.1],
//   "1952" : [5.8, 6.4, 6.7, 7.4, 7.4, 7.3, 7.5]
// }

// // Iterate the keys of the object
// // below is a for/in loop:
// // for("var we define" in [array])
// // below year = the key so (1948, 1949, 1950, 1951, 1952)
// for (const year in RainfallDatabase) {
//     // Get current yearly array of rainfall
//     // use bracket notation and variable "year" to grab rainfall totals
//     // caveat no order to object...  so 1948 isn't necessarily first
//     // meaning the loop is random
//     // use if/else to capture exact key ex..  1948
//     const yearlyData = RainfallDatabase[year]

//     // Reset yearly rainfall total to 0
//     let yearlyAmount = 0

//     // Look at each month and add to yearly total
//     // loop below is nested meaning it'll loop for each item in object
//     for (let i = 0; i < yearlyData.length; i++) {
//         const monthlyData = yearlyData[i]
//         // adding to yearly amount until end of loop to get total total
//         yearlyAmount = yearlyAmount + monthlyData
//     }

//     console.log(`${year} had ${Math.round(yearlyAmount)} inches of rainfall`)
// }



// More DOM stuff...................................................


// Build an HTML element
const h1 = (title, style) => {
  return `<h1 class="${style}">${title}</h1>`
}

const section = (title, style) => {
  return `<section class="bordered dashed ${style}">${title}</section>`
}

const aside = (title, style) => {
  return `<aside class="${style}">${title}</aside>`
}

// Inject the element into the DOM by executing the function
// This gives us HTML output "Marcus Fulbright"
// document.querySelector("#container").innerHTML = `
//     ${h1("Marcus Fulbright", "xx-large")}
  
// `
// Component Function --------------------------------
// build a component composed of many smaller elements
// React is built on this idea of build things out of smaller things with functions

const student = (name, clazz, info, status) => `
    <div id="student">
        ${h1(name, status)}
        ${section(clazz, "section--padded")}
        ${aside(info, "pushRight")}
    </div>
`



// Student Data
const students = [
  {
      name: "Chris Miller",
      class: "History",
      info: "Failed last exam",
      score: 59
  },
  {
      name: "Courtney Seward",
      class: "History",
      info: "Has completed all homework",
      score: 91
  },
  {
      name: "Garrett Ward",
      class: "History",
      info: "Wonderful at helping other students",
      score: 88
  },
  {
      name: "John Dulaney",
      class: "History",
      info: "Has never missed a class or exam",
      score: 92
  },
  {
      name: "Greg Lawrence",
      class: "History",
      info: "Sub-par performance all around",
      score: 64
  },
  {
      name: "Leah Duvic",
      class: "History",
      info: "Wonderful student",
      score: 97
  },
  {
      name: "Jesse Page",
      class: "History",
      info: "Smokes too much. Distracting.",
      score: 76
  },
  {
      name: "Kevin Haggerty",
      class: "History",
      info: "Falls asleep in class",
      score: 79
  },
  {
      name: "Max Wolf",
      class: "History",
      info: "Talks too much",
      score: 83
  },
  {
      name: "Lissa Goforth",
      class: "History",
      info: "Asks pointless, unrelated questions",
      score: 78
  },
  {
      name: "Tyler Bowman",
      class: "History",
      info: "When was the last time he attended class?",
      score: 48
  },
  {
      name: "Ray Medrano",
      class: "History",
      info: "Needs to contribute to in-class discussions",
      score: 95
  }
]

// Inject multiple student components into the DOM by executing the function
// students.forEach((currentStudent) => {
//   document.querySelector("#container").innerHTML += `
//   ${student(currentStudent.name, currentStudent.class, currentStudent.info)}`
// })

students.forEach((currentStudent) => {
  let studentComponent = ""
  if (currentStudent.score >= 60) {
      studentComponent = student(currentStudent.name, currentStudent.class, currentStudent.info, "passing")
  } else {
      studentComponent = student(currentStudent.name, currentStudent.class, currentStudent.info, "failing")
  }

  document.querySelector("#container").innerHTML += `
${studentComponent}
`
})

// adding += after innerHTML can be repeated instead of replaced
// document.querySelector("#container").innerHTML += `
// ${student("Marcus Fulbright", "Algebra", "Not a bright student")}
// `

// 




