# ES6

## Template Literal
1. **Problem**
  -       let firstName = 'Deepak';
          let lastName = 'Kumar';
          const fullName = firstName + ' ' + lastName;
          console.log(fullName);

  -       <html>
              <head>
                  <script src="index.pack.js"></script>
              </head>
              <body>
                  <p id="example"></p>
              </body>
          </html>
  
  
          let example = 'Hello \n' + 'world';
          console.log(example)
          document.getElementById('example').innerText = example;

2. **Solution**
  -       let firstName = 'Deepak';
          let lastName = 'Kumar';
          let num1 = 2;
          let num2 = 3;
          const fullName = `${firstName + lastName}`;
          const total = `${num1 + num2}`


          let example = `${word1} ${word2}`;
          console.log(example)
          document.getElementById('example').innerText = example;  

## Destructuring Objects
  -       const personalInformation = {
              firstName: 'Deepak',
              lastName: 'Kumar',
              city: 'Patna',
              state: 'Bihar',
              zipCode: 800024
          };

          const {firstName: fn, lastName: ln} = personalInformation;

          console.log(`${fn} ${ln}`);  

## Destructuring Arrays
  -       let [firstName, middleName, lastName] = ['Sachin', 'Ramesh', 'Tendulkar'];
          console.log(`${firstName + middleName + lastName}`)        // Sachin Ramesh Tendulkar     
          console.log(lastName)                                     // Tendulkar

          lastName = 'Kumar';
          console.log(lastName)                                     // Kumar

## Object Literal
  -       function addressMaker(city, state) {
              const newAdress = {city: city, state: state};    
              console.log(newAdress);
          }

          addressMaker('Patna', 'Bihar');  


  -       function addressMaker(address) {
              const {city, state} = address;
              
              const newAddress = {
                  city,                           //  city: city
                  state,                          //  state: state
                  country: 'United States'
              };
              console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
          }

          addressMaker({city: 'Austin', state: 'Texas'}); 

## For of Loop
  -       let fullName = "Sachin Tendulkar";
          for (const char of fullName) {
              console.log(char);
          }    

  -       let incomes = [62000, 67000, 75000];
          let total = 0;

          for (const income of incomes) {
              console.log(income);
              total += income;
          }
          console.log(total); 

## Spread Operator
  -       let example1 = {
              firstName: 'Deepak'
          };

          let example2 = {  
              ...example1,                                // passing by value not reference
              lastName:'Kumar'
          }
          console.log(example2);

  -       let example1 = [1,2,3,4,5,6];
          let example2 = [...example1];                   // passing by value not reference
          example2.push(true);

          console.log(example2);


## Rest Operator
  -       function add(...nums) {    
              console.log(nums);                           // [4, 5, 7, 8, 12]
          }

          add(4, 5, 7, 8, 12)

## Arrow functions
  -       function add(...nums) {
              let total = nums.reduce(function (x, y) {
                  return x+y;
              });    
              console.log(total);
          }

          function add(...nums) {
              let total = nums.reduce((x, y) => x+y );    
              console.log(total);
          }

          add(4, 5, 7, 8, 12)          


## Exports and Imports (Modules)          
-  **default Export**
    -   where person.js is having `export default person`
        1. `import person from './person.js'`
        2. `import per from './person.js'`

-  **named Export**
    1. `import {smth} from './utility.js'`
    2. `import {smth as Smth} from './utility.js'`
    3. `import * as buldled from './utility.js'`