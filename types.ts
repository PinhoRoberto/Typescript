let age: number = 25;
age = 26;

const name: string = "Maria";
const city: string = "São Paulo";
const tamplate: string = `I live in ${city}`;

const price: number = 49.90;
const quantity: number  = 3;
const negative: number = -10;

const isActive: boolean = true;
const isCompleted: boolean = false;

let undefinedValue: undefined = undefined;
let nullValue: null = null

//object
let pessoas:  {nome: string, idade: number, adulto?: boolean}= {
    idade: 30,
    nome: 'Luiz'
};
 

//Functions
function soma(x: number, y: number): number{
    return x + y;

}

//Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfNumbers2: number[] = [1, 2, 3];
let arrayOfStrings: Array<string> = ['a', 'b'];
let arrayOfStrings2: string [] = ['a', 'b'];


console.log("=== User Data ===");
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("Price:", price);
console.log("Active:", isActive);