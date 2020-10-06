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


//ПРАКТИКА - 1
/*const numberOfFilms = +prompt('Скільки фільмів ви уже подивилися?', '');

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

console.log(personalMovieDB);*/

//УСЛОВІЯ

/*if (4 == 4) {
    console.log("4 равно 4");
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too much');
} else {
    console.log('Ok!');
}

//ТЕРНАРНИЙ ОПЕРАТОР

(num === 50) ? console.log('Ok!'): console.log('Error');


switch (num) {
    case 49:
        console.log('49');
        break;
    case 50:
        console.log('50');
        break;
    case 90:
        console.log('90');
        break;
    default:
        console.log('DEFAULT');
        break;
}*/


//ЦИКЛИ

/*let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num <= 55);

for (let i = 1; i < 8; i++) {
    console.log(i);
}*/

//СТРІЛКОВІ ФУНКЦІЇ, ФУНКЦІЇ

/*let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage('Hello world!');
console.log(num);

function calk(a, b) {
    return a + b;
}

console.log(calk(10, 5));

function retNum() {
    let num = 50;
    return num;
}

const anotherNum = retNum();

console.log(anotherNum);

console.log(retNum());

const logger = function() {
    console.log('Hello');
};

logger();

const calkulator = (a, b) => {
    console.log('Done!');
    return a + b;
};*/

//МЕТОДИ І ВЛАСТИВОСТІ ЧИСЕЛ

/*const str = 'Text';

console.log(str.length);

const arr = [1, 2, 3];

console.log(arr.length);

console.log(str[2]);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));

const logg = 'Hello world!';

console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 11));

const num = 12.2;

console.log(Math.round(num));

const tests = '12.2px';

console.log(parseInt(tests));

console.log(parseFloat(tests));


console.log(str);*/

//CALLBACK ФУНКЦІЇ

/*function first() {
    //Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
}

function done() {
    console.log('I passed this lesson');
}

learnJS('JavaScript', done);*/

//ОБЪЕКТ

/*const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

const {border, bg} = options.colors;

console.log(border);

console.log(Object.keys(options).length);

console.log(options.name);

//delete options.name;

let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Options: ${i}, have meaninng: ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Options: ${key}, have meaninng: ${options[key]}`);
        counter++;
    }
}

console.log(counter);*/


//МАСИВИ І ПСЕВДОМАСИВИ

/*const arr = [1, 8, 3, 5, 2];

arr.sort(compareNum);

console.log(arr);

function compareNum(a, b) {
    return a - b;
}

//console.log(arr.length);

//arr[99] = 0;

//console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item}: in array ${arr}`);
});

//arr.pop();
//arr.push(10);

//console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}


const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products);
console.log(products.join('; '));*/

//Передача по силці

/*let a = 7;

let b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;

console.log(copy);

console.log(obj);

function copyObject(mainObj) {
    let objCopy = {};
    for (let key in mainObj) {
        objCopy[key] = mainObj;
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 3,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyObject(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);


const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);

clone.d = 20;

//console.log(add);
//console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'adadada';
console.log(oldArray);
console.log(newArray);

const video = ['you tube', 'vimeo', 'rutube'],
    blog = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blog, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newAray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q };*/

//ООП

/*let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);


const soldier = {
    health: 500,
    armour: 500,
    sayHello: function() {
        console.log("Hello");
    }
};

const john = Object.create(soldier);

const john = {
    health: 300,
};

//john.__proto__ = soldier;

//Object.setPrototypeOf(john, soldier);

//console.log(john.armour);

john.sayHello();*/


//Динамічна типізація

//To string

//1)

console.log(typeof(String(null)));

//2)

console.log(typeof(5 + ''));

const num = 5;

console.log("https://vk/sda/ada/com/catalog/" + num);

const fontSize = 25 + 'px';

//To Number

//1)

console.log(typeof(Number('5')));

//2)

console.log(typeof(+'5'));

//3)
console.log(typeof(parseInt("15px", 10)));

let answer = +prompt("Hello", "");

//To boolean

//0, '', null, undefined, NaN;

//1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}


//2)

console.log(typeof(Boolean('5')));

//3)

console.log(typeof(!!'5'));

//Задачі на співбесіді

//let x = 5;
//alert(x++); //5

//[ ] + false - null + true 

console.log(typeof([] + false)); //false


console.log([] + false - null); //NaN - type: number

console.log([] + false - null + true);

//let y = 1; 
//let x = y = 2; 
//alert(x); 

console.log([] + 1 + 2);

//alert( "1"[0] );

console.log(2 && 1 && null && 0 && undefined);


console.log(!!(1 && 2) === (1 && 2));


alert(null || 2 && 3 || 4);


const a = [1, 2, 3];
const b = [1, 2, 3];

alert(+"Infinity");