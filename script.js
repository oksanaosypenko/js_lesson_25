//Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...) 

let age = prompt('How old are you?');
if (age >= 0 && age < 12) {
    console.log('You are a child');
} else if (age >= 12 && age < 18) {
    console.log('You are a teenager');
} else if (age >= 16 && age < 60) {
    console.log('You are an adult');
} else {
    console.log('You are a pensioner')
}



//Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д) 

let number = +prompt('Enter a number from 0 to 9');
switch (number) {
    case 0:
        console.log(')');
        break;
    case 1:
        console.log('!');
        break;
    case 2:
        console.log('@');
        break;    
    case 3:
        console.log('#');
        break;
    case 4:
        console.log('$');
        break;
    case 5:
        console.log('%');
        break;
    case 6:
        console.log('^');
        break;
    case 7:
        console.log('&');
        break;
    case 8:
        console.log('*');
        break;
    case 9:
        console.log('(');
        break;
}

//Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

let num = prompt('Enter a three-digit number');
let x1 = Math.trunc(num / 100);
let x2 = Math.trunc(num % 100 / 10);
let x3 = num % 10;
if (x1 === x2 || x1 === x3 || x2=== x3) {
    console.log('The number has the same numerals')
} else {
    console.log('The number does not have the same numerals');
}



//Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.


let year = prompt('Enter a year');
if (Number.isInteger(year / 400) || Number.isInteger(year / 4) || Number.isInteger(year / 100)) {
    console.log('It is a leap-year');
} else {
    console.log('It\'s not a leap-year');
}


//Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом. 

let num1 = Number(prompt('Enter a 5-digit number'));
let n1 = Math.trunc(num1 / 10000);
let n2 = Math.trunc(num1 % 10000 / 1000);
let n3 = Math.trunc(num1 % 1000 / 100);
let n4 = Math.trunc(num1 % 100 / 10);
let n5 = num1 % 10;
if (n1 === n5 && n2 === n4) {
    console.log('Number is a palindrome');
} else {
    console.log('Number is NOT a palindrome');
}

//Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.



//Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%

let total = prompt('Enter total amount in $');
if (total >= 200 && total < 300) {
    console.log('Your discount is 3%');
} else if (total >= 300 && total < 500) {
      console.log('Your discount is 5%');
} else {
      console.log('Your discount is 7%');
}





























