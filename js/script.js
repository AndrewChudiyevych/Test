"use strict";


/*a = 15;
console.log(a);

let number = 5;
const leftBorderWidth = 1;


number = 10;
console.log(number);


const obj = {
    a: 50
};

obj.a = 10;
console.log(obj);

console.log(name);
var name = 'Ivan';

{
    var result = 50;
}

console.log(result);

//alert(5);
//[].push('a');*/


//ТИПИ ДАНИХ

/*let number = 19.1;

console.log(-4 / 0);
console.log('string' * 9);


let person = "Andrew";

const bool = true;

//console.log(something);

let und;

console.log(und);

const obj = {
    name: 'Andrew',
    age: 19,
    isMarried: false
};

console.log(obj.name);
//console.log(obj["name"]);

let array = ['plum.jpg', 'orange.png', 6, 'apple.svg', {},
    []
];

console.log(array[0]);*/

//ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЁм

//alert('Hello world!');

//const result = confirm("Do you want to close this window?");

//console.log(result);

//const answer = prompt("Are you 18 tears old?", "18");

//const answer = +prompt("Are you 18 tears old?", "18");  --Тип змінної буде number

//console.log(typeof(answer));

//console.log(answer + 5);

//console.log(answer);

//console.log(typeof(answer));

//const answers = [];

//answers[0] = prompt("Your name?", '');

//answers[1] = prompt("Your surname?", '');

//answers[2] = +prompt("Your age?", '');

//document.write(answers);

//console.log(typeof(answers));

//ІНТЕРПОЛЯЦІЯ

/*const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = 'Andrew';

alert(`Hello,${user}`);*/

//ОПЕРАТОРИ

/*console.log('arr' + " -object");

console.log(4 + " -object");

console.log(4 + "15");

let incr = 10,
    decr = 10;

//++incr;
//--decr;

console.log(incr++ + "/" + decr++);*/

const numberOfFilms = +prompt('Скільки фільмів ви уже подивилися?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один із останніх переглянутих фільмів?', ''),
    b = prompt('На скільки оціните його?', ''),
    c = prompt('Один із останніх переглянутих фільмів?', ''),
    d = prompt('На скільки оціните його?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);