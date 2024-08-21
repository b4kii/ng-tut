import { Injectable } from '@angular/core';

interface Car {
    id: number;
    name: string;
}

@Injectable({
    providedIn: 'root',
})
export class UserService {
    cars: Car[] = [
        { id: 1, name: 'audi' },
        { id: 2, name: 'volkswagen' },
        { id: 3, name: 'bmw' },
        { id: 4, name: 'honda' },
    ];

    getCars(): Car[] {
        return this.cars;
    }

    getCarById(id: number): Car | undefined {
        return this.cars.find(car => car.id === id );
    }
}

// forEach()
// The forEach() method is used to execute a function on each element in an array.

// const numbers = [1, 2, 3, 4];
// numbers.forEach(number => {
//   console.log(number);
// });
// map()
// The map() method creates a new array with the results of calling a function for every array element.

// const numbers = [1, 2, 3, 4];
// const squared = numbers.map(number => number * number);
// console.log(squared); // [1, 4, 9, 16]
// filter()
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// const numbers = [1, 2, 3, 4];
// const evens = numbers.filter(number => number % 2 === 0);
// console.log(evens); // [2, 4]
// reduce()
// The reduce() method reduces an array to a single value. It executes a provided function for each value of the array (from left-to-right).

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // 10
// find()
// The find() method returns the value of the first element in an array that satisfies the provided testing function.

// const numbers = [1, 2, 3, 4];
// const firstEven = numbers.find(number => number % 2 === 0);
// console.log(firstEven); // 2
// findIndex()
// Similar to find(), findIndex() returns the index of the first element that satisfies the provided testing function.

// const numbers = [1, 2, 3, 4];
// const firstEvenIndex = numbers.findIndex(number => number % 2 === 0);
// console.log(firstEvenIndex); // 1
// some()
// The some() method checks if at least one element in an array meets a condition.

// const numbers = [1, 2, 3, 4];
// const hasEvenNumber = numbers.some(number => number % 2 === 0);
// console.log(hasEvenNumber); // true
// every()
// Contrary to some(), the every() method checks if all elements in an array meet a condition.

// const numbers = [2, 4, 6, 8];
// const areAllEven = numbers.every(number => number % 2 === 0);
// console.log(areAllEven); // true
// includes()
// The includes() method checks if an array contains a certain value among its entries.

// const fruits = ['apple', 'banana', 'cherry'];
// const hasBanana = fruits.includes('banana');
// console.log(hasBanana); // true
// flat()
// The flat() method creates a new array with all sub-array elements concatenated recursively up to a specified depth.

// const nestedArray = [1, [2, 3], [[4, 5]]];
// const flattened = nestedArray.flat(2);
// console.log(flattened); // [1, 2, 3, 4, 5]