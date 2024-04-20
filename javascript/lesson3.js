const myCar = {
   make: "Toyota",
   model: "Corolla",
   year: 2022,
   color: "red",
   mileage: '25,000',
   'driver-name': 'John',
   'driver address': 'New York',
   accelerate: function() {
      console.log("The car is accelerating!");
   },
   brake: function() {
      console.log("The car is braking!");
   },
   honk: function() {
      console.log("Beep beep!");
   },
   'fullInfo': function(){
      this.accelerate(),
      this.brake(),
      this.honk(),

      console.log(
         `
         // THIS
            Car maker: ${this.make}
            Car model: ${this.model}
            Car year: ${this.year}
            Car color: ${this.color}
            Car mileage: ${this.mileage}
         `
      );
   }
}
myCar.light = () => {
   console.log('Lights on');
}

// OBJECT KEYS
// const objKeys = Object.keys(myCar);
// console.log(objKeys);

// for(element of objKeys){
//    console.log(element);
// }

// OBJECT VALUES
// const objValues = Object.values(myCar);
// console.log(objValues);

// for(item of objValues){
//    console.log(item);
// }

// ENTRIES

// const entries = Object.entries(myCar);
// console.log(entries);

// OBJECT ASSIGN
const carOne = {
   brand: 'Toyotta',
   year: 2022
}
const carTwo = {
   color: 'red',
   mileage: 24000
}
const carThree = {
   'model': 'Corolla'
}

// const mergedCar = Object.assign({}, carTwo, carOne, carThree)
// console.log(mergedCar);
// let entr = Object.entries(mergedCar)
// console.log(entr);



// NEW JAVASCRIPT VERSION

// const make = "Toyota";
// const model = "Corolla";
// const year = 2022

// const car = {
//    make: make,
//    model: model,
//    year: year,
// };

// const car = {make, model, year};

// console.log(car);

// DYNEMIC KEY

const propertyName = "cake";
const propertyModel = "version";
const propertyYear = "century";

const car = {
   [propertyName]: "Toyota",
   [propertyModel]: 'Corolla',
   [propertyYear]: 2022,
}

// OBJECT DESTRUCTIONING

// const cars = {
//    make: "Toyota",
//    model: 'Corolla',
//    year: 2022,
//    someObj: {x: 1, y: 2}
// }
// const {
//    model,
//    year,
//    make: made, // nom berish
// } = cars

// console.log(model, year, made);

// JOIN OBJECTS

// ...obj1 ... obj2

// CHECK KEYS OWN OR NOT
const cars = {
   make: "Toyota",
   model: 'Corolla',
   year: 2022,
}

// console.log(cars.hasOwnProperty('make'));
// console.log(cars.hasOwnProperty('color'));