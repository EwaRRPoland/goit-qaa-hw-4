//zadanie domowe HW4
//Ewa Rostecka-Rzońca


//funkcja JS, która przyjmuje jako dane wejściowe tablicę liczb i zwraca nową tablicę,
//w której każda liczba jest podwojona.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const doubleNumbers = numbers.map(a => a * 2);
console.log(numbers);
console.log(doubleNumbers);
console.log('');


//Funkcję JS, która przyjmuje jako dane wejściowe tablicę obiektów reprezentujących studentów 
//i zwraca nową tablicę zawierającą tylko imiona studentów.

const students = [
  { name: "Ewa", course: "fizyka" },
  { name: "Ola", course: "biologia" },
  { name: "Robert", course: "robotyka" },
  { name: "Pawel", course: "informatyka" },
  { name: "Alan", course: "mechatronika" },
];
const nameStudents = students.map(student => student.name);
console.log(students);
console.log(nameStudents);

